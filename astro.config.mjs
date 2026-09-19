// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://diydoohickeys.com',
	integrations: [
		starlight({
			title: 'DIY Doohickeys',
			description:
				'Open-source ESP32 control surfaces and gadgets for OBS, Home Assistant and your DAW.',
			logo: { src: './src/assets/doohickey.svg', alt: 'DIY Doohickeys' },
			favicon: '/favicon.svg',
			head: [
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
			],
			customCss: ['./src/styles/brand.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/diydoohickeys' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@diydoohickeys' },
			],
			// Rackglow is parked in src/drafts/ until its repo is public; restore this group when its
			// pages move back under src/content/docs/.
			sidebar: [
				// {
				// 	label: 'Rackglow',
				// 	items: [
				// 		{ label: 'Overview', slug: 'projects/rackglow' },
				// 		{ label: 'Build guide', items: [{ autogenerate: { directory: 'projects/rackglow/build' } }] },
				// 	],
				// },
			],
		}),
	],
});
