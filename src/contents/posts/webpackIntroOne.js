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
  id: 1,
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
  contents: [
    `<p>In case you don't know it, a frontend pipeline is a set of instructions useful to automate some tasks you usually perform on your assets before going to production, or while developing to make the development itself easier and faster.
    Here's some examples, just to give the idea:</p>`,
    `<ul>
      <li>Compile .scss/.sass into .css</li>
      <li>Minify your code</li>
      <li>Copy all your splitted code into a single file (usually for javscripts file)</li>
      <li>Compile your html template (pug/jade, nunjucks, handlebars ...) into standard html</li>
    </ul>`,
    `<p>In this article we are going to write a basic pipeline which can take care of executing the tasks listed above and to achieve this we are using <a href="https://webpack.js.org/" target="_blank">Webpack 2</a>, a module bundler that is becoming one of the most popular frameworks to build this kind stuff.</p>`,
    `<p>The first thing to know about Webpack is that it is not a proper task runner like <a href="http://gulpjs.com/" target="_blank">Gulp.js</a>, Webpack is a module bundler, that means its job is to take all your splitted files and put them together with the logic and constraints you decided in your config file.</p>`,
    `<p>Let's start writing some code so all will make more sense, we begin with the creation of a basic project structure:</p>`,
    `<ul>
      <li>Create a new folder for the project;</li>
      <li>Inside that folder create two more folders: <b>src</b> (for all our assets) and <b>dist</b> (for the output);</li>
      <li>In the project root create a javascript file that is going to contain the webpack config, usually it is called <b>webpack.config.js</b>, but you can choose whatever you prefer;</li>
    </ul>`,
    `<p>The easiest part to achieve with webpack is bundling together javascript files, this will be our first goal.
    So let's create a <b>index.js</b> file and a <b>javascript</b> folder with an <b>index.js</b> in it, all inside <b>src</b>, in order to have this folders structure:</p>`,
    `<img src="/images/posts/webpackIntroOne_0.jpg" />`,
    `<p>Now we can start configuring webpack, but first you need to install it, of course, with <code>$ npm install webpack --save-dev</code>, then open with your favorite editor <b>webpack.config.js</b> and export an object as described in the docs:</p>`,
    `<pre><code class="javascript post__code">
      module.exports = {
        entry: './app.js',
        output: {
          filename: 'bundle.js'
        }
      }
    </pre></code>
    <p class="post__caption">webpack.config.js</p>`,
    `<p>Then we change it to suit our project structure:</p>
    <ul>
      <li><code>entry</code>: lets you define the entry point of all your assets, in our case it is <code>"./src/index.js"</code>;</li>
      <li><code>output</code>: as the name suggests, defines where your build goes once is completed, we are using two more options of <code>output</code>
      <ul>
        <li><code>filename</code>: simply the name of the file containing the build, usually something like build.js or main.js, but again you can choose whatever you like;</li>
        <li><code>path</code>: lets you specify the path to that file, in our case we puts <code>"./dist"</code>;</li>
      </ul>
      </li>
    </ul>`,
    `<pre><code class="javascript post__code">
      module.exports = {
        entry: './src/index.js',
        output: {
          filename: 'bundle.js',
          path: './dist'
        }
      }
    </pre></code>
    <p class="post__caption">webpack.config.js</p>`,
    `<p>We are finally ready to try it out, to run webpack type <code>$ ./node_modules/.bin/webpack</code> in your favorite shell inside the project root, or if you have webpack installed globally, just <code>$ webpack</code>.</p>`,
    `<p>In your dist folder you'll find a bundle.js file containing some javascript that webpack uses to bundle the different files, and nothing more since our index.js is empty, so let's move over an add some content to it.</p>`,
    `<p>Webpack allows us to use the import/export features contained in <a href="https://developer.mozilla.org//en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank">ES2015 module import</a> without the needs of babel or another transpiler, webpack itself takes care of wrapping that code into something usable by all browsers. We can proceed writing a couple functions and importing them in our index.js.</p>`,
    `<pre><code class="javascript post__code">
      // .src/javascript/utils.js
      export const foo = () => { console.log('foo'); };
      export const bar = () => { console.log('bar'); };
    </pre></code>
    <p class="post__caption">.src/javascript/utils.js</p>`,
    `<pre><code class="javascript post__code">
      // .src/javascript/index.js
      import { foo, bar } from './utils.js';

      foo();
      bar();
    </pre></code>
    <p class="post__caption">.src/javascript/index.js</p>`,
    `<p>Run <code>$ ./node_modules/.bin/webpack</code> again and this time you'll see the imported code copied into the bundle file. Now you can link this file in your HTML and see the logs produced by the two functions.</p>`,
    `<p>Checkout the part two of this article where we start to handle our stylesheets</p>`
  ]
};

module.exports = {
  en: postEn
}