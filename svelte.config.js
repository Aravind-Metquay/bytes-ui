import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},
	
	package: {
		// This is crucial for SSR compatibility
		// It tells svelte-package how to handle the build process
		exports: (filepath) => {
			// Include all TypeScript and JavaScript files
			if (filepath.endsWith('.d.ts')) return true;
			if (filepath.endsWith('.js')) return true;
			if (filepath.endsWith('.ts')) return true;
			// Exclude Svelte files from the main exports - they should be compiled
			return false;
		},
		files: (filepath) => {
			// Include source files for source maps and debugging
			if (filepath.includes('src/lib')) return true;
			// Include compiled outputs
			if (filepath.includes('dist')) return true;
			return false;
		}
	}
};

export default config;