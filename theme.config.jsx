export default {
  logo: <span>Code Snippets</span>,
  project: {
    link: 'https://github.com/shuding/nextra'
  },  
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 Nextra 2.0 is released. Read more →
      </a>
    )
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
    text: `MIT ${new Date().getFullYear()} © DocsGPT`,
  },
  // ... other theme options
}