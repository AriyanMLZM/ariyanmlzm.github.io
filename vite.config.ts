import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	assetsInclude: ['**/*.glb'],
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				display: 'fullscreen',
				background_color: '#080a1a',
				start_url: '/',
				name: 'Ariyan Molazem',
				short_name: 'Ariyan Molazem',
				description: 'Ariyan 3d portfolio',
				theme_color: '#080a1a',
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/pwa-maskable-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable',
					},
					{
						src: '/pwa-maskable-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
		}),
	],
})
