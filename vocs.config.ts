import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Simbolik Docs',
  basePath: '/simbolik-docs/',
  topNav: [
    {
      text: 'Simbolik',
      link: 'https://simbolik.dev',
    }
  ],
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Debugging',
      link: '/debugging',
    },
    {
      text: 'Testing',
      link: '/testing',
    },
    {
      text: 'Code Coverage',
      link: '/code-coverage',
    },
    {
      text: 'Static Analysis',
      link: '/static-analysis',
    },
    {
      text: 'Configuration',
      link: '/configuration',
    },
    {
      text: 'Access & Contributor Program',
      link: '/access',
    }
  ],
})
