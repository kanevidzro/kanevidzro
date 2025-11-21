// @ts-check

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import rehypeKatext from 'rehype-katex'
import remarkMath from 'remark-math'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://kanevidzro.com',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'snazzy-light',
        dark: 'vitesse-dark',
      },
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatext],
  },
})
