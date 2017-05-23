const header = require('../mixins/header');
const footer = require('../mixins/footer');

const config = require('../mixins/config');

const postEn = {
  meta: {
    title: 'Javascript promises guide: using async await | Web Developer\'s Thoughts',
    keywords: 'promises async await guide tutorial javascript ecmascript6 es6',
    description: 'A guide about javascript promises: what they are and how to use them effectively with async await.'
  },
  og: {
    title: 'Javascript promises guide: using async await | Web Developer\'s Thoughts',
    description: 'A guide about javascript promises: what they are and how to use them effectively with async await.',
    url: `${config.baseDomain}/posts/const-and-let-variables.html`,
    image: `${config.baseDomain}/images/homepage-hero_v1.jpg`
  },
  header: header.en,
  footer: footer.en,
  id: 0,
  date: {
    value: '2017-05-19T20:46:35+02:00',
    label: '19 May 2017'
  },
  signatureUrl: '/about.html',
  slug: '/posts/javascript-promises-guide',
  title: 'Javascript promises guide: using async await',
  shortDescr: 'A guide about javascript promises, what they are and how to use them effectively with async await.',
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
    `<p>If you are writing javascript you already know keeping your code asynchronous is a must and sometimes achieving this can be very painful, specially if you need to impose a specific order among your async functions.</p>`,
    `<p>There are some modules out there that handle this for you, <a href="https://github.com/caolan/async" target="_blank">async</a> for instance, if you like the "callback" approach, but there is another way to achieve asynchronous programming without making a mess: Promises !</p>`,
    `<p>A promise is an async function that lets you specify what to do if everything goes as planned and what to do otherwise. <br> Here's a simple promise:</p>`,
    `<pre><code class="javascript post__code">
      const myPromise = new Promise(function (resolve, reject) {
        // ... doing my stuff
        if (true)
          return resolve('ok');
        return reject('error');
      });
    </pre></code>
    <p class="post__caption">Base promise.</p>`,
    `<p>As you can see <code>Promise()</code> takes a function as its only argument, this function in turn has two arguments:
      <ul>
        <li><code>resolve</code>: a function to call if the promise should succeed;</li>
        <li><code>reject</code>: a function to call if the promise should fail.</li>
      </ul>
    </p>`,
    `<p>In the previous example the promise will succeed, of course, and will return the string 'ok'. Now here's how to use that promise:</p>`,
    `<pre><code class="javascript post__code">
      const myPromise = new Promise(function (resolve, reject) {
        // ... doing my stuff
        if (true)
          return resolve('ok');
        return reject('error');
      });

      myPromise.then(function(result) {
        console.log('promise done', result);
      });
      console.log('reference');

    </pre></code>
    <p class="post__caption">Using the base promise.</p>`,
    `<p>A promise instance exposes a <code>then(succeedCallback, failureCallback)</code> function to handle the results of the promise once it has finished, it takes two callbacks: one is used in case of a succeed promise, the other in case of a failed one. <br> If we run the code above it will <u>probably</u> log 'reference' first and then 'promise done ok', this because the promise is asynchronous so the code above does not wait for it to be executed.</p>`,
    `<p>Now let's change the example a bit to make it more flexible:</p>`,
    `<pre><code class="javascript post__code">
      const myPromise = function(shouldSucceed) {
        return new Promise(function (resolve, reject) {
          if (shouldSucceed)
            return resolve('ok');
          return reject('error');
        });
      };
      myPromise(true).then(function(result) {
        console.log('first promise done', result);
      });
      myPromise(false).then(null, function(error) {
        console.log('second promise done', error);
      });
      console.log('reference');
    </pre></code>
    <p class="post__caption">Improving the example.</p>`,
    `<p>This time the order of the results is not predictable, probably 'reference' will be the first thing printed, but it is wrong to make this kind of assumptions truth be told.</p>`,
    `<p>We can still improve the promise handling with another function, <code>catch(failureCallback)</code>, also provided by every promise instance, it takes a callback to execute in case of a failure just like <code>then()</code> does for a success. You can use it like this:</p>`,
    `<pre><code class="javascript post__code">
      const myPromise = function(shouldSucceed) {
        return new Promise(function (resolve, reject) {
          if (shouldSucceed)
            return resolve('ok');
          return reject('error');
        });
      };

      myPromise(true).then(function(result) {
        console.log('first promise done', result);
      });

      myPromise(false)
        .then(function(result) {
          console.log('second promise done', result);
        })
        .catch(function(error) {
          console.log('second promise done', error);
        });
      console.log('reference');
    </pre></code>
    <p class="post__caption">Using catch function.</p>`,
    `<p>This last syntax, with <code>then()</code> for handling the success callback and <code>catch()</code> for the failure one, is most popular and easy to read in my opinion and the one I suggest you to use.</p>`,
    `<p></p>`
  ]
};

module.exports = {
  en: postEn
};