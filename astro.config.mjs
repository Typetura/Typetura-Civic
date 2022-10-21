import { defineConfig } from 'astro/config';

export default defineConfig({
  siteName: 'Civic Website', // Name your project here
  siteLogo: '/logo.svg', // Path to square logo of agency
  domain: 'gov', // `gov` or `mil`?
  lang: 'en', // `en` for English, `es` for Spanish

  // -----------------------------------------------------
  // Header configuration
  header: 'basic', // `basic` or `extended`

  // Define your website’s menu. Maximum one level deep.
  headerLinks: [
    {
      text: 'Section One',
      submenu: [
        {
          text: 'Link',
          link: './',
        },
        {
          text: 'Link',
          link: './',
        },
        {
          text: 'Link',
          link: './',
        },
      ]
    },
    {
      text: 'Section Two',
      submenu: [
        {
          text: 'Link',
          link: './',
        },
        {
          text: 'Link',
          link: './',
        },
        {
          text: 'Link',
          link: './',
        },
      ]
    },
    {
      text: 'Link',
      link: './',
    },
  ],
  search: false,

  // -----------------------------------------------------
  // Footer configuration
  footer: 'big', // `big` or `slim`

  email: false,
  phone: false,

  social: {
    // Add a link to your social if you have one. If not, use `false`
    facebook: 'https://www.facebook.com/gsa',
    twitter: 'https://twitter.com/usgsa',
    youtube: 'https://www.youtube.com/usgsa',
    instagram: 'false',
    linkedin: 'https://www.linkedin.com/company/gsa',
  },
  rss: false, // `true` or `false`

  // This is only shown in the `big` footer
  footerLinks: [
    {
      text: 'Section One',
      submenu: [
        {
          text: 'Link',
          link: './',
        },
        {
          text: 'Link',
          link: './',
        },
        {
          text: 'Link',
          link: './',
        },
      ]
    },
    {
      text: 'Section Two',
      submenu: [
        {
          text: 'Link',
          link: './',
        },
        {
          text: 'Link',
          link: './',
        },
        {
          text: 'Link',
          link: './',
        },
      ]
    },
    {
      text: 'Link',
      link: './',
    },
  ],
});
