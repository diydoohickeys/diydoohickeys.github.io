# diydoohickeys.com

The DIY Doohickeys website: the landing page, product pages and build guides. Built with
[Astro Starlight](https://starlight.astro.build) and published to GitHub Pages.

## Working on it

Needs Node 22.12 or newer.

```bash
npm install
npm run dev
```

The site is served at `http://localhost:4321`. `npm run build` writes the static site to `dist/`.

## Layout

| Path | What |
|---|---|
| `src/content/docs/` | Every page. `index.mdx` is the landing page; each product lives under `projects/<name>/` |
| `src/assets/` | Build photos and the logo |
| `src/assets/products/<name>/` | UI screenshots copied from each product repo (git-ignored — see below) |
| `src/styles/brand.css` | The brand palette over Starlight's theme |
| `scripts/sync-images.mjs` | Copies each product's `docs/images/` in before `dev` and `build` |

**Screenshots have one home: the product repo.** `sync-images` copies them from a local checkout
when one exists, otherwise from GitHub. Photos of the hardware belong to the site and live in
`src/assets/` directly.

**A product's web flasher is not part of this site.** Each product repo publishes its own GitHub
Pages site, which is served at `diydoohickeys.com/<RepoName>/` automatically. Product pages here
live under `/projects/<name>/` so they never collide with those paths.

## The logo

`src/assets/doohickey.svg` and the favicons in `public/` are distributed by the Deck Doohickey
repo's `Icons/create-icons.py`. Don't edit them here; regenerate them there.

## License

MIT.
