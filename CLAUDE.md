# diydoohickeys.com

The DIY Doohickeys website — Astro Starlight, published to GitHub Pages from the
`diydoohickeys/diydoohickeys.github.io` org repo. Astro's own dev-server and docs notes are in
`AGENTS.md`.

## Rules

- **Build guides live here; developer docs stay in each product repo.** A product README is an
  overview + a link to `/projects/<name>/`; don't duplicate its "building from source" section here.
- **Product pages go under `/projects/<name>/`.** A product repo's own Pages site (its web flasher)
  owns `/<RepoName>/` on the same domain, so never create a page at that path.
- **UI screenshots have one home: the product repo's `docs/images/`.** `scripts/sync-images.mjs`
  copies them into `src/assets/products/<name>/` (git-ignored) before `dev` and `build`. Never
  commit a copy. Hardware photos belong to this site and live in `src/assets/`.
- **The logo and favicons come from the Deck Doohickey repo's `Icons/create-icons.py`** (its
  `COPIES` table). Never hand-edit them here.
- Outstanding photos and facts are marked `PHOTO:` / `TODO:` in comments — grep for them.
- Images in `.md` pages use the `~/` alias (`~/assets/products/rackglow/x.png`); `.md` comments are
  `<!-- -->`, `.mdx` comments are `{/* */}`.
- **Parked pages live in `src/drafts/`** (outside the content collection, so never built). Rackglow is
  parked there until its repo is public; to restore it, move `src/drafts/projects/` back under
  `src/content/docs/`, and uncomment its sidebar group (`astro.config.mjs`), its `PRODUCTS` entry
  (`scripts/sync-images.mjs`) and its landing card (`index.mdx`).
- Search (Pagefind) only exists in a production build; `/pagefind/*` 404s under `npm run dev`.
