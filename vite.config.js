import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // Makes asset paths relative, ensuring it works on GitHub Pages subdirectories
})
