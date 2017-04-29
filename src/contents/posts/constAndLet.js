const header = require('../mixins/header');
const footer = require('../mixins/footer');
// https://github.com/isagalaev/highlight.js/
const postEn = {
  header: header.en,
  footer: footer.en,
  id: 0,
  slug: '/en/posts/const-and-let-variables',
  title: 'Javascript ES6 must-know features: const & let variables',
  shortDescr: 'A guide about the most important features of Javascript ECMAScript 6. This article is the first of a three part serie and it is about const & let variables: how they works and when to use them.',
  tags: [
    {
      url: '/images/tags/javascript.jpg',
      caption: 'JavaScript'
    }
  ],
  contents: [
    `<p>One of the main feature of ECMAScript 6 is the introduction of two new types of variables: <strong>const</strong> and <strong>let.</strong></p>
    <p>The most important thing to know about them is that they are <strong>blocked-scoped variables,&nbsp;</strong>that&nbsp;means they live and are available <b>only</b> inside the block in which they are defined and in his children.&nbsp;</p>`
    `So, before move on it is better to clarify what a block`,
    `<p>Let's make an example:</p>`,
    `<pre><code class="javascript post__code">
      if (true) {
        // this is a block
      }

      if (true)
        // this is not

      while (true) {
        // this a block
      }

      // a tricky one now
      switch (name) {
        case 'Mike': // NOT a block
          ... some code
          return true;
        case 'Pit': { // a block
          return false;
        }
      }
    </pre></code>
    <p class="post__caption">recognise a javascript's block</p>
    `
  ]
};

module.exports = {
  en: postEn
}