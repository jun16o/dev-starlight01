import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'サービス名 | ヘルプセンター',
			favicon: '/favicon.svg',
			// logo: {
			// 	alt: 'サービス名',
			// 	replacesTitle: false,
			// 	light: '/src/assets/images/web_logo_x01.png',
			// 	dark: '/src/assets/images/web_white_logo_x01.png',
			// },
			customCss: [
				'/src/assets/styles/custom.css',
			],
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
			},
			social: {
				instagram: 'https://www.instagram.com/furusatoscom/',
				twitter: 'https://twitter.com/furusatoscom',
		    youtube: 'https://www.youtube.com/@furusatos',
			},
			sidebar: [
				{
					label: 'ガイド',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'リファレンス',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
