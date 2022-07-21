import { sveltekit } from '@sveltejs/kit/vite';

import { defineConfig } from 'vite';
import path from "path"

export default defineConfig({
  resolve:{
	alias:{
		'@lib': path.resolve(__dirname,'./src/lib'),
		'@comp': path.resolve(__dirname,'./src/lib/components'),
		'@utils': path.resolve(__dirname,'./src/lib/utils'),
	}
  },
  plugins: [sveltekit()],
});