const header = require('../mixins/header');
const footer = require('../mixins/footer');

const postEn = {
  meta: {
    title: 'Frontend pipeline introduction with webpack 2 | Web Developer\'s Thoughts',
    keywords: 'webpack pipeline frontend articles web developer guide tutorial javascript ecmascript6 es6',
    description: 'An introduction about frontend pipeline in 2017 and how to build one from scratch using webpack 2.'
  },
  header: header.en,
  footer: footer.en,
  id: 0,
  date: {
    value: '2017-04-30T17:46:35+02:00',
    label: '30 April 2017'
  },
  signatureUrl: '/en/about.html',
  slug: '/en/posts/frontend-pipeline-introduction-with-webpack-2',
  title: 'Frontend pipeline introduction with webpack 2',
  shortDescr: 'An introduction about frontend pipeline in 2017 and how to build one from scratch using webpack 2.',
  tags: [
    {
      url: '/images/tags/javascript.jpg',
      caption: 'JavaScript'
    }
  ],
  contents: []
};

module.exports = {
  en: postEn
}