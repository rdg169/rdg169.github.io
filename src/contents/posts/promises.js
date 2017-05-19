const header = require('../mixins/header');
const footer = require('../mixins/footer');

const postEn = {
  meta: {
    title: 'Javascript promises guide with async await | Web Developer\'s Thoughts',
    keywords: 'promises async await guide tutorial javascript ecmascript6 es6',
    description: 'A guide about javascript promises: what they are and how to use them effectively with async await.'
  },
  header: header.en,
  footer: footer.en,
  id: 0,
  date: {
    value: '2017-05-19T20:46:35+02:00',
    label: '19 May 2017'
  },
  signatureUrl: '/en/about.html',
  slug: '/en/posts/javascript-promises-guide',
  title: 'Javascript promises guide with async await',
  shortDescr: 'A guide about javascript promises: what they are and how to use them effectively with async await.',
  tags: [
    {
      caption: 'JavaScript'
    }
  ],
  contents: [
    `<h3>Introduction</h3>`,
    `<p>If you are writing javascript you already know keeping your code asynchronous is a must and sometimes achieving this can be very painful, specially if you need to impose a specific order among your async functions.</p>`,
    `<p>There are some modules out there that handle this for you, <a href="https://github.com/caolan/async" target="_blank">async</a> for instance, if you like the "callback" approach, but there is another way to achieve async programming without making a mess: Promises !</p>`,
    `<p></p>`
  ]
};

module.exports = {
  en: postEn
};