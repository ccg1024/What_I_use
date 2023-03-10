import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
import react from "@astrojs/react";
// https://astro.build/config
import image from "@astrojs/image";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  site: 'https://uses.ccg.tiger/',
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          // make custom markdown style
          h1: 'text-4xl font-bold font-mplus',
          h2: 'text-2xl font-bold font-mplus',
          h3: 'text-xl font-bold font-mplus',
          h4: 'text-lg font-bold font-mplus',
          h5: 'font-bold font-mplus',
          h6: 'font-bold font-mplus',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6 text-justify',
          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
          blockquote: "px-2 bg-orange-200 dark:bg-zinc-800 rounded-md"
        }
      ]
    ]
  }
});
