# mustafasegf.com

My personal website. Neobrutalist design straight from Figma, built to be light and fast.

![Screenshot of the site](./public/images/og.png)

## Stack

- [Astro](https://astro.build) with React islands, only the interactive parts ship JS
- [Tailwind CSS v4](https://tailwindcss.com) with a CSS-first theme
- [shadcn/ui](https://ui.shadcn.com) on Base UI
- Light mode by default with a persisted dark-mode toggle
- Respects `prefers-reduced-motion`

## Develop

```sh
cp .env.example .env   # fill in your links
bun install
bun run dev
```

## Build

```sh
bun run build          # static site in dist/
bun run serve          # serve dist/ with Bun
```

## Docker via Nix

Dependencies come from a fixed-output derivation, so the site build itself runs
fully sandboxed with no network. On a new system, `nix build .#nodeModules`
fails once and prints the hash to fill into `depsHashes` in `flake.nix`.

```sh
set -a; source .env; set +a        # bake your PUBLIC_* links into the page
nix build .#dockerImage --impure
docker load < result
docker run -p 3000:3000 personal-web:latest
```

Without `--impure` the build stays pure and the social/email links render empty.
