const header = require('./mixins/header.js');
const footer = require('./mixins/footer.js');
const posts = require('./posts');

const config = require('./mixins/config');

const meta = {
  en: {
    title: 'Posts | Web Developer\'s Thoughts',
    keywords: 'posts articles web developer guide tutorial javascript ecmascript6 es6',
    description: 'List of all guides, tutorials and tips on web development\'s languages, frameworks and related technologies'
  }
};

const og = {
  title: meta.title,
  description: meta.description,
  url: `${config.baseDomain}/posts.html`,
  image: `${config.baseDomain}/images/homepage-hero_v1.jpg`
};

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
    meta: meta.en,
    og,
    header: Object.assign({}, header.en, { activePageIndex: 0 }),
    hero: hero.en,
    posts: posts.en,
    footer: footer.en
  }
}