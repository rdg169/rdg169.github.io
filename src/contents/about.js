const header = require('./mixins/header');
const footer = require('./mixins/footer');

const meta = {
  en: {
    title: 'About | Web Developer\'s Thoughts',
    keywords: 'about me web developer guide tutorial javascript ecmascript6 es6',
    description: 'About, personal informations, contacts of author of guides, tutorials and tips on web development\'s languages, frameworks and related technologies'
  }
}

const hero = {
  it: {
    title: ''
  },
  en: {
    title: 'Something about me and this blog',
    subtitle: 'I started this blog with the aim of having a place where I could <strong>share some guides or tips about framework, languages and technologies</strong> based on my work and free time experience as a web developer. <br> When I\'m learning a new framework or trying to build a new web app I always look for guides and tutorials for tips and examples, with this blog I hope to provide this kind of contents as well, creating one more valid resource available for all the people out there.'
  }
};

const aboutMe = {
  it: {
    title: 'Bio',
    contents: [
      'Giovanni Rodighiero.',
      'Italian web developer, javascript fan.',
      'Interested in both frontend and backend',
      'Bachelor\'s Degree in Computer Science, currently working in <a href="http://www.develon.com/" target="_blank">Develon Digital</a>.'
    ]
  },
  en: {
    title: 'Bio',
    contents: [
      'Giovanni Rodighiero.',
      'Italian web developer, javascript fan.',
      'Interested in both frontend and backend',
      'Bachelor\'s Degree in Computer Science, currently working in <a href="http://www.develon.com/" target="_blank">Develon Digital</a>.'
    ]
  }
};

const contacts = {
  it: {},
  en: {
    title: 'Contact me',
  }
}

module.exports = {
  it: {
    header: Object.assign({}, header.it, { activePageIndex: 1 }),
    hero: hero.it,
    bio: aboutMe.it,
    contacts: contacts.it,
    footer: footer.it
  },
  en: {
    meta: meta.en,
    header: Object.assign({}, header.en, { activePageIndex: 1 }),
    hero: hero.en,
    bio: aboutMe.en,
    contacts: contacts.en,
    footer: footer.en
  }
}
