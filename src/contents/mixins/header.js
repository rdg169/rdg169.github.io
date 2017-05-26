const headerIt = {
  title: 'Web developer\'s thoughts',
  home: '/it',
  links: [
    {
      label: 'Articoli',
      url: '/it/posts.html'
    },
    {
      label: 'Su di me',
      url: '/it/about.html'
    }
  ]
};

const headerEn = {
  title: 'Web developer\'s thoughts',
  shortTitle: 'W.D.T.',
  home: '/',
  links: [
    {
      label: 'Posts',
      url: '/posts.html'
    },
    {
      label: 'About',
      url: '/about.html'
    }
  ]
};

module.exports = {
  it: headerIt,
  en: headerEn
};