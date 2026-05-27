// https://vitepress.dev/reference/site-config

const SITE_URL = 'https://danielmurnane.com'
const SITE_TITLE = 'Daniel Murnane'
const SITE_DESCRIPTION = 'High-performance human integration library: physicist, ML researcher, ATLAS collaboration. Niels Bohr Institute (DDSA Fellow).'
const OG_IMAGE = `${SITE_URL}/logo.png`

// Inline SVGs for socials VitePress doesn't ship icons for.
const ICON_ORCID = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378a1.058 1.058 0 1 1 .002 2.116 1.058 1.058 0 0 1-.002-2.116zm-.74 3.297h1.479v9.591H6.629V7.675zm3.376 0h3.708c3.527 0 5.073 2.518 5.073 4.796 0 2.476-1.937 4.795-5.052 4.795H10.005V7.675zm1.483 1.34v6.91h2.024c2.886 0 3.55-2.187 3.55-3.454 0-2.06-1.317-3.456-3.62-3.456h-1.954z" fill="currentColor"/></svg>'

const ICON_SCHOLAR = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" fill="currentColor"/></svg>'

const ICON_EMAIL = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 7.5L2.5 6h19L12 11.5zM2 8.5V18h20V8.5l-10 6-10-6z" fill="currentColor"/></svg>'

export default {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],

    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:title', content: SITE_TITLE }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:site_name', content: SITE_TITLE }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: SITE_TITLE }],
    ['meta', { name: 'twitter:description', content: SITE_DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'API', link: '/api/core' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Publications', link: '/publications' },
      { text: 'Contributing', link: '/guide/contributing' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Quickstart', link: '/guide/quickstart' },
            { text: 'Configuration', link: '/guide/configuration' }
          ]
        },
        {
          text: 'Usage Guide',
          items: [
            { text: 'Basic Concepts', link: '/guide/concepts' },
            { text: 'Advanced Usage', link: '/guide/advanced' },
            { text: 'Best Practices', link: '/guide/best-practices' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'Contributing', link: '/guide/contributing' },
            { text: 'Changelog', link: '/guide/changelog' },
            { text: 'Security', link: '/guide/security' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Core Methods', link: '/api/core' },
            { text: 'Advanced Features', link: '/api/advanced' },
            { text: 'Rate Limits', link: '/api/limits' },
            { text: 'Events', link: '/api/events' },
            { text: 'Types', link: '/api/types' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Basic Usage', link: '/examples/' },
            { text: 'Advanced Patterns', link: '/examples/advanced' },
            { text: 'Integration Examples', link: '/examples/integration' },
            { text: 'Performance Tips', link: '/examples/performance' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/murnanedaniel' },
      { icon: { svg: ICON_ORCID }, link: 'https://orcid.org/0000-0003-4046-4822', ariaLabel: 'ORCID' },
      { icon: { svg: ICON_SCHOLAR }, link: 'https://scholar.google.com/scholar?q=author%3A%22Daniel+Murnane%22', ariaLabel: 'Google Scholar' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/danielmurnane/' },
      { icon: { svg: ICON_EMAIL }, link: 'mailto:daniel.murnane@nbi.ku.dk', ariaLabel: 'Email' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Daniel Murnane'
    }
  }
}
