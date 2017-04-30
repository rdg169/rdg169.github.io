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

module.exports = {
  it: {
    header: Object.assign({}, header.it, { activePageIndex: 0 }),
    hero: hero.it,
    posts: posts.it,
    footer: footer.it
  },
  en: {
    header: Object.assign({}, header.en, { activePageIndex: 0 }),
    hero: hero.en,
    posts: posts.en,
    footer: footer.en
  }
}