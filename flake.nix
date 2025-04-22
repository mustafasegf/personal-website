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

        appBundle = pkgs.stdenv.mkDerivation {
          pname = "bun-app-bundle";
          version = "0.0.1";

          src = ./.;

          nativeBuildInputs = [ pkgs.bun ];

          dontConfigure = true;
          dontBuild = true;
          dontCheck = true;

          installPhase = ''
            mkdir -p $out/app

            cp -r ${./src/index.ts} $out/app/index.ts
            cp -r ${./dist} $out/app/dist # Copy your static assets

            pushd $out/app
            echo "Finished bun install"
            popd
          '';
        };

      in
      {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.bun
          ];

          postShell = ''
            bun --version
          '';
        };

        packages.default = pkgs.dockerTools.buildImage {
          name = "personal-web"; # Choose your image name
          tag = "latest";     # Choose your image tag

          contents = [
            pkgs.bun    # Add the bun executable and its dependencies
            appBundle   # Add the prepared app files (including node_modules)
          ];

          config = {
            WorkingDir = "/app"; # Set working directory inside the container
            ExposedPorts = {
              "3000/tcp" = {}; # Expose the port your server listens on
            };
            Env = [
              "NODE_ENV=production" # Set environment to production
            ];
            Cmd = [
              "bun" "run" "/app/index.ts" # Use absolute path inside container
            ];
          };
        };

        packages.dockerImage = self.packages.${system}.default;
      });
}

