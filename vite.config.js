import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './', // Makes asset paths relative, ensuring it works on GitHub Pages subdirectories
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                kanyamazane: resolve(__dirname, 'kanyamazane.html'),
                entokozweni: resolve(__dirname, 'entokozweni.html'),
            },
        },
    },
})
