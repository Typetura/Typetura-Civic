import { defineConfig } from 'astro/config';

export default defineConfig({
  siteName: 'Civic Website', // Name your project here
  domain: 'gov', // `gov` or `mil`?
  language: 'en', // `en` for English, `es` for Spanish
  menu: {
    'has submenu': {
      'item one': '#item',
      'item two': '#item',
      'item three': '#item',
      'item four': '#item',
      'item five': '#item',
      'item six': '#item',
      'item seven': '#item',
    },
    'standalone link': '#link',
  },
  search: false,
});
