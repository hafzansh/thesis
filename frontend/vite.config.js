import { sveltekit } from '@sveltejs/kit/vite';

import path from 'path';
// import { defineConfig } from 'vite';

const config = {
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
