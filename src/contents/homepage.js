const header = require('./header');

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
}

module.exports = {
  it: {
    header: Object.assign({}, header.it, { activePageIndex: -1 }),
    hero: hero.it
  },
  en: {
    header: Object.assign({}, header.en, { activePageIndex: -1 }),
    hero: hero.en
  }
};