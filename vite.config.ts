import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'


export default defineConfig({
	plugins: [react(), tsconfigPaths(), svgr()],
	resolve: {
		alias: {
			components: '/src/components',
			hooks: '/src/hooks',
			pages: '/src/pages',
			assets: '/src/assets',
			types: '/src/types',
			store: '/src/store',
			api: '/src/api',
			features: '/src/features',
			layout: '/src/layout'
		}
	}
})
