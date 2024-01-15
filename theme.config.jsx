export default {
  logo: <span>✂️ Code Snippets</span>,
  project: {
    link: 'https://github.com/justincgreen/'
  },  
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
  },
  editLink: {
    text: 'Edit this page on GitHub'
  },
  toc: {
    backToTop: true
  },
  // primaryHue: {
  //   dark: 100,
  //   light: 100,
  // },
  footer: {
    text: `MIT ${new Date().getFullYear()} © Justin Green Code Snippets`,
  },
  // ... other theme options
}