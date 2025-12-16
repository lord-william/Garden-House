import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                kanyamazane: resolve(__dirname, 'kanyamazane.html'),
                entokozweni: resolve(__dirname, 'entokozweni.html'),
                locations: resolve(__dirname, 'locations.html'),
                amenities: resolve(__dirname, 'amenities.html'),
                contact: resolve(__dirname, 'contact.html'),
            }
        }
    }
})
