import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), testRollup()],
	// build: {
	// 	assetsInlineLimit: 100000000,
	// 	chunkSizeWarningLimit: 100000000,
	// 	cssCodeSplit: false,
	// 	brotliSize: false,
	// 	rollupOptions: {
	// 		inlineDynamicImports: true,
	// 		output: {
	// 			manualChunks: () => "everything.js",
	// 		},
	// 	},
	// 	rollupOptions: {

	// 	}
	// },
})

function testRollup () {
	return {
		generateBundle(options, bundle, isWrite) {
			console.log('generateBundle');
			this.emitFile({
				type: 'asset',
				fileName: 'app.some-hash.js',
				source: addFiles(bundle)
			});
		},
		renderChunk(code, chunk, options) {
			console.log('renderChunk');
		},
		augmentChunkHash(chunkInfo) {
			console.log('augmentChunkHash');
			console.log(chunkInfo);
		}
	}
}

function addFiles (bundle) {
	let result = "let scriptTag = document.getElementsByTagName('script');scriptTag = scriptTag[scriptTag.length - 1];const parent = scriptTag.parentNode;"
	for (const key in bundle) {
		if (key.endsWith('js')) {
			result += `const script${bundle[key].name} = document.createElement('script');script${bundle[key].name}.setAttribute('src', '${key}');parent.appendChild(script${bundle[key].name});`
		} else if (key.endsWith('css')) {
			result += `const css = document.createElement('link');css.setAttribute('href', '${key}');css.setAttribute('rel', '${key}');parent.appendChild(css);`
		}
	}
	return result
}

