const header = require('./mixins/header.js');
const footer = require('./mixins/footer.js');
const posts = require('./posts');

const hero = {
  it: {
    title: ''
  },
  en: {
    title: 'Browse through all my posts',
  }
};

const allPosts = {
  it: {
    contents: posts.allPosts
  },
  en: {
    contents: posts.allPosts
  }
}

module.exports = {
  it: {
    header: Object.assign({}, header.it, { activePageIndex: 0 }),
    hero: hero.it,
    posts: allPosts.it,
    footer: footer.it
  },
  en: {
    header: Object.assign({}, header.en, { activePageIndex: 0 }),
    hero: hero.en,
    posts: allPosts.en,
    footer: footer.en
  }
}