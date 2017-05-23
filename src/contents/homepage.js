const header = require('./mixins/header');
const footer = require('./mixins/footer');
const posts = require('./posts');

const config = require('./mixins/config');

const meta = {
  en: {
    title: 'Web Developer\'s Thoughts',
    keywords: 'web developer guide tutorial javascript ecmascript6 es6',
    description: 'Guides, tutorials and tips on web development\'s languages, frameworks and related technologies'
  }
};

const og = {
  title: meta.title,
  description: meta.description,
  url: `${config.baseDomain}`,
  image: `${config.baseDomain}/images/homepage-hero_v1.jpg`,
};

const hero = {
  it: {
    title: 'Guide, consigli e opioni di uno sviluppatore web.',
    image: {
      desktop: 'https://source.unsplash.com/random/1920x800',
      tablet: 'https://source.unsplash.com/random/1280x500'
    }
  },
  en: {
    title: 'Guides, tips and thoughts of a web developer.',
    image: {
      desktop: './images/homepage-hero_v1.jpg',
      tablet: './images/homepage-hero_v1.jpg',
      mobile: './images/homepage-hero_v1.jpg'
    }
  }
};

const recentlyWrote = {
  en: {
    title: 'Most recent posts',
    cta: {
      url: '/en/posts.html',
      label: 'See all'
    },
    posts: posts.findByIds([0, 1, 2], 'en')
  }
};

module.exports = {
  en: {
    meta: meta.en,
    og,
    header: Object.assign({}, header.en, { activePageIndex: -1 }),
    hero: hero.en,
    recentlyWrote: Object.assign({}, recentlyWrote.en, { signatureUrl: '/about' }),
    footer: footer.en
  }
};