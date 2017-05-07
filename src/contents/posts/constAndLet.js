const header = require('../mixins/header');
const footer = require('../mixins/footer');

const postEn = {
  meta: {
    title: 'Javascript ES6 must-know features: const & let variables  | Web Developer\'s Thoughts',
    keywords: 'const let posts articles web developer guide tutorial javascript ecmascript6 es6',
    description: 'A guide about the most important features of Javascript ECMAScript 6. This article is about const & let variables: how they works and when to use them.'
  },
  header: header.en,
  footer: footer.en,
  id: 0,
  date: {
    value: '2017-04-27T17:46:35+02:00',
    label: '27 April 2017'
  },
  signatureUrl: '/en/about.html',
  slug: '/en/posts/const-and-let-variables',
  title: 'Javascript ES6 must-know features: const & let variables',
  shortDescr: 'A guide about the most important features of Javascript ECMAScript 6. This article is about const & let variables: how they works and when to use them.',
  tags: [
    {
      caption: 'JavaScript'
    },
    {
      caption: 'ES6'
    }
  ],
  contents: [
    `<h3>Introduction</h3>`,
    `<p>One of the main feature of ECMAScript 6 is the introduction of two new types of variables: <strong>const</strong> and <strong>let.</strong></p>
    <p>The most important thing to know about them is that they are <strong>blocked-scoped variables,&nbsp;</strong>that&nbsp;means they live and are available <b>only</b> inside the block in which they are defined and in his children.&nbsp;</p>`,

    `<p>So, before we move on it is better to clarify what a block is: a block is a portion of code contained in a pair of curly brackets, plain and simple.</p>`,

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
    <p class="post__caption">recognise a javascript's block</p>`,

    `<p>Why is being block-scoped important for a variable? Well because it allows us to not worry anymore about  declaring some vars that already exist, which usually leads to bugs and unexpected behaviours.</p>`,
    `<h3>Variables' scope</h3>`,
    `<p>In javascript, indeed, all variables are in a <b>functional scope</b>, that means they exist only inside the function in which they are declared and, if they are not declared inside a function, they are <b>global variables</b>:</p>`,

    `<pre><code class="javascript post__code">
      var a = 1; // global scope

      if (true) {
        var a = 2; // global scope
        var b = 1; // global scope
      }

      function foo() {
        var b = 3; // functional scope
        var c = 4; // functional scope
        console.log(b);
      }
      console.log(b); // prints 1
      foo(); // prints 3
      console.log(a); // prints 2
      console.log(b); // prints 3
      //console.log(c); // throws and error
    </pre></code>
    <p class="post__caption">functional and global scoped variables</p>`,

    `<p>With const and let it is now also possible to achieve the concept of “local variable”, typical of other programming languages. Below an example of the same code using the let variable type (const behaves in the same way, with a little exception explained later in the article).</p>`,

    `<pre><code class="javascript post__code">
      let a = 1;

      if (true) {
        let a = 2;
        let b = 1;
      }

      function foo() {
        let b = 3;
        console.log(b);
      }

      // console.log(b); throws an error, b is defined in a local scope not accessible for here.
      foo(); // prints 3
      console.log(a); // prints 1
      // console.log(b); throws an error too, same reason as the previous one.
    </pre></code>
    <p class="post__caption">block scoped variables</p>`,
    `<h3>Const difference with let</h3>`,
    `<p>Regarding const, the main difference with let is that it identifies a constant variable, as you probably inferred, but with a peculiarity in case of array and objects values:</p>`,

    `<pre><code class="javascript post__code">
      const a = 1;
      // a = 'foo'; throws an error

      const foo = function () {
        // some code
      };
      // foo = function () { console.log('foo 2');} throws an error

      // object "special" case
      const b = {};
      b['a'] = 'a'; // that's fine
      b['a'] = 'aa'; // that's fine too
      b['a'] = {};
      b['a']['b'] = 'b'; // also ok
      console.log(b); // prints { a: { b: 'b' } }
      // b = 'string'; throws an error

      // array "special" case
      const c = [];
      c.push('a'); // that's fine
      c[0] = b; // fine too
      c[0] = { a: 'a' }; // still ok
      // all array operations are allowed
      // c = 'foo' throws an error though
    </pre></code>
    <p class="post__caption">const variable type</p>`,

    `<p>Rule of thumb for choosing between const and let: use const unless the value of your variable is going to change in some part of your code, here's some common use cases:</p>`,

    `<pre><code class="javascript post__code">
      for (let index = 0; index < array.length; index++) { } // counter of a for loop is a let, of course

      const package = require('package'); // package import should be const

      // dynamic-keys object should be const
      const ajaxFormPayload = {};
      ajaxFormPayload['email'] = 'email@mail.it';
      ajaxFormPayload['password'] = 'password';

      const foo = function(arg1, arg2) {} // anonymous functions should be assigned to const variable;
    </pre></code>
    <p class="post__caption">const and let use cases</p>`,
    '<p>What about var? Well if you are writing in ES6 you should just avoid using it, simply stick to const and let.</p>'
  ]
};

module.exports = {
  en: postEn
}