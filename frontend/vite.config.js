import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
/** @type {import('vite').UserConfig} */
const config = {
	server: {
		host: '0.0.0.0',
		port: '8080',
	},
	resolve: {
		alias: {
			'@lib': path.resolve('./src/lib'),
			'@comp': path.resolve('./src/lib/components'),
			'@utils': path.resolve('./src/lib/utils'),
		},
	},
	plugins: [sveltekit()],
};

export default config;
