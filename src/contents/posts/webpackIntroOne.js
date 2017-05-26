const header = require('../mixins/header');
const footer = require('../mixins/footer');

const config = require('../mixins/config');


const postEn = {
  meta: {
    title: 'Frontend pipeline with webpack 2: setting up babel (1 of 2) | Web Developer\'s Thoughts',
    keywords: 'webpack pipeline frontend articles web developer guide tutorial javascript ecmascript6 es6',
    description: 'An introduction about frontend pipeline in 2017 and how to build one from scratch using webpack 2: setting up babel transpiler.'
  },
  og: {
    title: 'Frontend pipeline with webpack 2: setting up babel (1 of 2) | Web Developer\'s Thoughts',
    description: 'An introduction about frontend pipeline in 2017 and how to build one from scratch using webpack 2: setting up babel transpiler.',
    url: `${config.baseDomain}/posts/const-and-let-variables.html`,
    image: `${config.baseDomain}/images/homepage-hero_v1.jpg`
  },
  serie: {
    next: '/posts/frontend-pipeline-introduction-with-webpack-2-part-two'
  },
  header: header.en,
  footer: footer.en,
  id: 1,
  date: {
    value: '2017-04-30T17:46:35+02:00',
    label: '30 April 2017'
  },
  signatureUrl: '/about.html',
  slug: '/posts/frontend-pipeline-introduction-with-webpack-2-part-one',
  title: 'Frontend pipeline with webpack 2: setting up babel (1 of 2)',
  shortDescr: 'An introduction about frontend pipeline in 2017 and how to build one from scratch using webpack 2: setting up babel traspiler.',
  tags: [
    {
      caption: 'webpack 2'
    }
  ],
  contents: [
    `<h3>Prologue</h3>`,
    `<p>In case you don't know it, a frontend pipeline is a set of instructions useful to automate some tasks you usually perform on your assets before going to production, or while developing to make the development itself easier and faster.
    Here's some examples, just to give the idea:</p>`,
    `<ul>
      <li>Compile .scss/.sass into .css</li>
      <li>Minify your code</li>
      <li>Copy all your splitted code into a single file (usually for javascripts file)</li>
      <li>Compile your html template (pug/jade, nunjucks, handlebars ...) into standard html</li>
    </ul>`,
    `<p>In this article we are going to write a basic pipeline which can take care of executing the tasks listed above and to achieve this we are using <a href="https://webpack.js.org/" target="_blank">webpack 2</a>, a module bundler that is becoming one of the most popular frameworks to build this kind stuff.</p>`,
    `<p>The first thing to know about webpack is that it is not a proper task runner like <a href="http://gulpjs.com/" target="_blank">Gulp.js</a>, webpack is a module bundler, that means its job is to take all your splitted files and put them together with the logic and constraints you decided in your config file.</p>`,
    `<h3>Bundle javacript file together</h3>`,
    `<p>Let's start writing some code so all will make more sense, we begin with the creation of a basic project structure:</p>`,
    `<ul>
      <li>Create a new folder for the project;</li>
      <li>Inside that folder create two more folders: <b>src</b> (for all our assets) and <b>dist</b> (for the output);</li>
      <li>In the project root create a javascript file that is going to contain the webpack config, usually it is called <b>webpack.config.js</b>, but you can choose whatever you prefer;</li>
    </ul>`,
    `<p>The easiest part to achieve with webpack is bundling together javascript files, this will be our first goal.
    So let's create a <b>index.js</b> file and a <b>javascript</b> folder with an <b>index.js</b> in it, all inside <b>src</b>, in order to have this folders structure:</p>`,
    `<img src="/images/posts/webpackIntroOne_0.jpg" />`,
    `<p>Now we can start configuring webpack, but first you need to install it, of course, with <code>$ npm install webpack --save-dev</code>, then open <b>webpack.config.js</b> with your favorite editor and export an object as described in the docs:</p>`,
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
        <li><code>path</code>: lets you specify the path to that file, it must be an <b>absolute</b> path, in our case we use node's helper <code>__direname</code> to get the absolute path to our current location, then we merge it with the relative one to the folder we are using as target through node's <code>path</code> module;</li>
      </ul>
      </li>
    </ul>`,
    `<pre><code class="javascript post__code">
      // webpack.config.js
      const path = require('path');

      module.exports = {
        entry: './src/index.js',
        output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, './dist')
        }
      }
    </pre></code>
    <p class="post__caption">webpack.config.js</p>`,
    `<p>We are finally ready to try it out, in order to run webpack type <code>$ ./node_modules/.bin/webpack</code> in your favorite shell inside the project root, or if you have webpack installed globally, just <code>$ webpack</code>.</p>`,
    `<p>In your dist folder you'll find a bundle.js file containing some javascript that webpack uses to bundle the different files, and nothing more since our index.js is empty, so let's move over an add some content to it.</p>`,
    `<p>webpack allows us to use the import/export features contained in <a href="https://developer.mozilla.org//en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank">ES2015 module import</a> without the needs of babel or another transpiler, webpack itself takes care of wrapping that code into something usable by all browsers. We can proceed writing a couple functions and importing them in our index.js.</p>`,
    `<pre><code class="javascript post__code">
      // .src/javascript/utils.js
      export function foo() { console.log('foo'); };

      export function bar() { console.log('bar'); };
    </pre></code>
    <p class="post__caption">.src/javascript/utils.js</p>`,
    `<pre><code class="javascript post__code">
      // .src/javascript/index.js
      import { foo, bar } from './utils.js';

      foo();
      bar();
    </pre></code>
    <p class="post__caption">.src/javascript/index.js</p>`,
    `<p>Of course we also have to import all our javascript stuff in the assets' entry point, which is <code>./src/index.js</code></p>`,
    `<pre><code class="javascript post__code">
      // .src/index.js
      import scripts from './javascript/'; // shortcut for './javascript/index.js'
    </pre></code>
    <p class="post__caption">.src/index.js</p>`,
    `<p>Run <code>$ ./node_modules/.bin/webpack</code> again and this time you'll see the imported code copied into the bundle file. Now you can link this file in your HTML and see the logs produced by the two functions.</p>`,
    `<h3>Tree Shaking in webpack 2</h3>`,
    `<p>webpack 2 ships with a really cool feature: it can detect unused imports and, more in general, unused code to produce a more efficient bundle, let's put it in practise:</p>`,
    `<pre><code class="javascript post__code">
      // .src/javascript/index.js
      import { foo, bar } from './utils.js';

      foo();
      //bar(); we are importing bar, but actually not using it
    </pre></code>
    <p class="post__caption">.src/javascript/index.js</p>`,
    `<p>If you run webpack and open <code>bundle.js</code> you'll see that <code>bar()</code> is marked as <code>/* unused harmony export bar */</code>, this means that on a production build that code won't be injected, you can easily verify this by running webpack with a <code>-p</code> flag that stands for production.</p>`,
    `<h3>Add Babel traspiler</h3>`,
    `<p>Now that we have a pipeline that can understand the import/export logic, we can move on adding some useful modules to speed up our developing routine, a very common one is <a href="">Babel</a> traspiler that allows us to write ES6 syntax without browser compatibility issues.</p>`,
    `<p>webpack is capable of understanding a large variety of modules, written in likewise of languages through <b>loaders</b>: a loader basically instructs webpack how to treat a file of a language it natively doesn't understand ( != javascript ) and/or how to perform some actions on it. <br>
    In our case we need a loader to handle ES6 syntax, specifically <a href="https://github.com/babel/babel-loader" target="_blank">Babel-loader</a>, so we can transpile ES6 to "native" javascript before putting the result in the <b>bundle.js</b> file.</p>`,
    `<p>As written on the loader's docs, we need to install a couple of node_modules <code>$ npm install --save-dev babel-loader babel-core babel-preset-env</code> like that, then we need to edit our <b>webpack.config.js</b> file to configure in which files webpack has to apply the loader:</p>`,
    `<pre><code class="javascript post__code">
      // webpack.config.js
      const path = require('path');
      module.exports = {
        entry: './src/index.js',
        output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, './dist')
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['env']
                }
              }
            }
          ]
        }
      }
    </pre></code>
    <p class="post__caption">webpack.config.js</p>`,
    `<ul>
      <li><code>test</code>: is a regex to use in order to identify the files affected by the loader, in our case catch all .js files;</li>
      <li><code>exclude</code>: another regex to use as blacklist to all the files or folders you don't want to be affected by the loader, in our case we don't want to apply babel transpiling to the node_module stuff of course;</li>
      <li><code>use</code>: which loader to use;</li>
      <li><code>options</code>: options of the loader, we specify babel to use 'env' presets of rules, refer the babel docs for more infos about this;</li>
    </ul>`,
    `<p>And basically we are done with it ! If you start writing some ES6 code in your .js files and then run webpack, as we did previously, you'll se that in your <b>bundle.js</b> file what you wrote has been traspiled to be fully understandable by all browsers.</p>`,
    `<h3>Conclusions</h3>`,
    `<p>By now you should be able to create basic pipeline with webpack and have a general idea of how a loader works.</p>`,
    `<p>Checkout the <a href="/posts/frontend-pipeline-introduction-with-webpack-2-part-two.html">next part of this serie</a> where we are going to handle our stylesheets, compiling .sass/.scss into regular .css and more!</p>`
  ]
};

module.exports = {
  en: postEn
}