{
  description = "A simple Bun project with Nix (including Docker build)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable"; # Or a stable channel/commit
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        bun-runtime-only = pkgs.stdenv.mkDerivation {
          pname = "bun-runtime-only";
          version = pkgs.bun.version;
          dontUnpack = true;

          nativeBuildInputs = [ ];

          installPhase = ''
            mkdir -p $out/bin

            cp ${pkgs.bun}/bin/bun $out/bin/bun

            chmod +x $out/bin/bun

            echo "Created filtered bun runtime without bunx in $out"
          '';
        };

        appBundle = pkgs.stdenv.mkDerivation {
          pname = "bun-app-bundle";
          version = "0.0.1";

          src = ./.;

          nativeBuildInputs = [ pkgs.bun ];

          dontConfigure = true;
          dontBuild = true;
          dontCheck = true;

          installPhase = ''
            BUILD_DIR=$(mktemp -d)
            echo "Temporary build directory: $BUILD_DIR"

            echo "Copying source files to $BUILD_DIR..."
            cp ${./astro.config.mjs} $BUILD_DIR/astro.config.mjs
            cp ${./package.json} $BUILD_DIR/package.json
            cp ${./bun.lock} $BUILD_DIR/bun.lock
            cp -r ${./src} $BUILD_DIR/src

            pushd $BUILD_DIR
            echo "Changed directory to $PWD"

            echo "Running bun install --frozen-lockfile..."
            ASTRO_TELEMETRY_DISABLED=1 bun install --frozen-lockfile
            echo "Finished bun install."

            echo "Running bun run build..."
            ASTRO_TELEMETRY_DISABLED=1 bun run build
            echo "Finished bun run build. Checking for dist folder..."
            ls -l # Optional: list files to verify dist exists

            mkdir -p $out/app
            echo "Created final output directory: $out/app"

            echo "Copying build artifacts to $out/app..."
            cp -r dist $out/app/dist

            popd
            echo "Changed back directory."

            echo "Finished preparing app bundle in $out/app"
            ls -l $out/app
          '';
          };

      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            bun
            dive
          ];

          postShell = ''
            bun --version
          '';
        };

        packages.default = pkgs.dockerTools.buildImage {
          name = "personal-web";
          tag = "latest";

          contents = [
            bun-runtime-only
            appBundle
          ];

          config = {
            WorkingDir = "/app";
            ExposedPorts = {
              "3000/tcp" = {};
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

