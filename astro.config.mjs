// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://diydoohickeys.com',
	integrations: [
		starlight({
			title: 'DIY Doohickeys',
			description:
				'Open-source DIY electronics: synth gear, bench tools, control surfaces and smart-home gadgets. Free build files, code and guides for everything.',
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
			sidebar: [
				{
					label: 'Rackglow',
					items: [
						{ label: 'Overview', slug: 'projects/rackglow' },
						{ label: 'Build guide', items: [{ autogenerate: { directory: 'projects/rackglow/build' } }] },
					],
				},
			],
		}),
	],
});
