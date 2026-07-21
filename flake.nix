{
  description = "Personal website built with Astro and Bun (including Docker build)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        # PUBLIC_* links live in .env (gitignored). Pass them into the build with:
        #   set -a; source .env; set +a; nix build .#dockerImage --impure
        # Pure builds fall back to empty strings.
        envOr = name: let v = builtins.getEnv name; in if v == "" then "" else v;
        siteEnv = {
          DOMAIN = envOr "DOMAIN";
          PUBLIC_EMAIL = envOr "PUBLIC_EMAIL";
          PUBLIC_GITHUB = envOr "PUBLIC_GITHUB";
          PUBLIC_LINKEDIN = envOr "PUBLIC_LINKEDIN";
          PUBLIC_X = envOr "PUBLIC_X";
        };

        # Per-system because node_modules contains platform binaries (tailwind oxide, esbuild).
        # To fill in a new system: nix build .#nodeModules and copy the "got:" hash.
        depsHashes = {
          aarch64-darwin = "sha256-626qjRgGbP5WeJ0HKz9hKUIWBdRlg6ReFotKaORwPpM=";
          x86_64-linux = "";
          aarch64-linux = "";
          x86_64-darwin = "";
        };

        # Fixed-output derivation: network is allowed here even in pure sandboxed
        # builds, so the app build below stays fully offline.
        nodeModules = pkgs.stdenv.mkDerivation {
          pname = "personal-web-node-modules";
          version = "1.0.0";

          dontUnpack = true;
          dontFixup = true;
          dontPatchShebangs = true;

          nativeBuildInputs = [ pkgs.bun pkgs.cacert ];

          buildPhase = ''
            export HOME=$TMPDIR
            cp ${./package.json} package.json
            cp ${./bun.lock} bun.lock
            bun install --frozen-lockfile --no-progress --ignore-scripts --dns-result-order=ipv4first
          '';

          installPhase = ''
            mkdir -p $out
            cp -r node_modules $out/node_modules
          '';

          outputHashAlgo = "sha256";
          outputHashMode = "recursive";
          outputHash =
            let h = depsHashes.${system} or ""; in
            if h == "" then pkgs.lib.fakeHash else h;
        };

        appBundle = pkgs.stdenv.mkDerivation {
          pname = "bun-app-bundle";
          version = "1.0.0";

          src = ./.;

          nativeBuildInputs = [ pkgs.bun ];

          env = siteEnv;

          dontConfigure = true;
          dontCheck = true;

          buildPhase = ''
            export HOME=$TMPDIR

            cp -r ${nodeModules}/node_modules node_modules
            chmod -R u+w node_modules

            ASTRO_TELEMETRY_DISABLED=1 bun run build
          '';

          installPhase = ''
            mkdir -p $out/app
            cp -r dist $out/app/dist
            cp src/index.ts $out/app/index.ts
          '';
        };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            bun
            dive
          ];
        };

        packages.nodeModules = nodeModules;
        packages.app = appBundle;

        packages.default = pkgs.dockerTools.buildImage {
          name = "personal-web";
          tag = "latest";

          contents = [
            pkgs.bun
            appBundle
          ];

          config = {
            WorkingDir = "/app";
            ExposedPorts = {
              "3000/tcp" = { };
            };
            Env = [
              "NODE_ENV=production"
            ];
            Cmd = [
              "bun" "run" "/app/index.ts"
            ];
          };
        };

        packages.dockerImage = self.packages.${system}.default;
      });
}
