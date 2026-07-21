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

        appBundle = pkgs.stdenv.mkDerivation {
          pname = "bun-app-bundle";
          version = "1.0.0";

          src = ./.;

          nativeBuildInputs = [ pkgs.bun ];

          dontConfigure = true;
          dontBuild = true;
          dontCheck = true;

          installPhase = ''
            BUILD_DIR=$(mktemp -d)

            cp ${./astro.config.mjs} $BUILD_DIR/astro.config.mjs
            cp ${./tsconfig.json} $BUILD_DIR/tsconfig.json
            cp ${./package.json} $BUILD_DIR/package.json
            cp ${./bun.lock} $BUILD_DIR/bun.lock
            cp -r ${./src} $BUILD_DIR/src
            cp -r ${./public} $BUILD_DIR/public

            pushd $BUILD_DIR

            ASTRO_TELEMETRY_DISABLED=1 bun install --frozen-lockfile --dns-result-order=ipv4first
            ASTRO_TELEMETRY_DISABLED=1 bun run build

            mkdir -p $out/app
            cp -r dist $out/app/dist
            cp src/index.ts $out/app/index.ts

            popd
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
