// Copies each product's UI screenshots out of its own repo into src/assets/products/<name>/
// (git-ignored), so every image has exactly one home: the product repo that renders it.
//
// Source per product, first that works:
//   1. a local checkout — <NAME>_DIR env var, else the default path below (dev machine)
//   2. the GitHub contents API for the repo (CI; needs the repo to be public, or GITHUB_TOKEN)
//
// Build photos (not UI screenshots) belong to this site and live in src/assets/ directly.
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const PRODUCTS = [
	{
		name: 'rackglow',
		local: 'D:/PlatformIO/Projects/Rackglow',
		repo: 'diydoohickeys/Rackglow',
		ref: 'main',
		dir: 'docs/images',
	},
];

const IMAGE = /\.(png|jpe?g|webp|gif|svg)$/i;
const root = resolve(import.meta.dirname, '..');

async function fromGitHub(p, dest) {
	const headers = { 'User-Agent': 'diydoohickeys-site' };
	if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
	const url = `https://api.github.com/repos/${p.repo}/contents/${p.dir}?ref=${p.ref}`;
	const res = await fetch(url, { headers });
	if (!res.ok) throw new Error(`${p.repo}: ${res.status} ${res.statusText} listing ${p.dir}`);
	const files = (await res.json()).filter((f) => f.type === 'file' && IMAGE.test(f.name));
	for (const f of files) {
		const data = await fetch(f.download_url, { headers });
		if (!data.ok) throw new Error(`${p.repo}: ${data.status} fetching ${f.name}`);
		writeFileSync(join(dest, f.name), Buffer.from(await data.arrayBuffer()));
	}
	return files.length;
}

for (const p of PRODUCTS) {
	const dest = join(root, 'src/assets/products', p.name);
	rmSync(dest, { recursive: true, force: true });
	mkdirSync(dest, { recursive: true });

	const local = join(process.env[`${p.name.toUpperCase()}_DIR`] ?? p.local, p.dir);
	let count;
	if (existsSync(local)) {
		const files = readdirSync(local).filter((f) => IMAGE.test(f));
		for (const f of files) cpSync(join(local, f), join(dest, f));
		count = files.length;
		console.log(`sync-images: ${p.name} ← ${local} (${count})`);
	} else {
		count = await fromGitHub(p, dest);
		console.log(`sync-images: ${p.name} ← github.com/${p.repo} (${count})`);
	}
}
