const header = require('../mixins/header');
const footer = require('../mixins/footer');

const postEn = {
  meta: {
    title: 'Frontend pipeline introduction with webpack 2: Sass, ExtractTextPlugin and postCSS (2 of 2) | Web Developer\'s Thoughts',
    keywords: 'webpack pipeline frontend articles web developer guide tutorial javascript ecmascript6 es6',
    description: 'An introduction about frontend pipeline in 2017 and how to build one from scratch using webpack 2: setting up Sass, ExtractTextPlugin and postCSS'
  },
  header: header.en,
  footer: footer.en,
  id: 1,
  date: {
    value: '2017-05-7T15:12:16+02:00',
    label: '7 May 2017'
  },
  signatureUrl: '/en/about.html',
  slug: '/en/posts/frontend-pipeline-introduction-with-webpack-2-part-two',
  title: 'Frontend pipeline introduction with webpack 2:<br> Sass, ExtractTextPlugin and postCSS (2 of 2)',
  shortDescr: 'An introduction about frontend pipeline in 2017 and how to build one from scratch using webpack 2: setting up Sass, ExtractTextPlugin and postCSS',
  tags: [
    {
      caption: 'webpack 2'
    }
  ],
  contents: [
    `<h3>Indroduction</h3>`,

    `<p>In the first part of this serie (check it out <a href="/en/posts/frontend-pipeline-introduction-with-webpack-2-part-one.html">here</a> if you missed it) we learned how to bundle our javascript files into a single output and how to transpile its contents from ES6 syntax to the classic one, to avoid browser support issues.</p>`,

    `<p>In this second part we are going to take care of our stylesheets:
    <ul>
      <li>extract all css from our <code>bundle.js</code> into a separate file;</li>
      <li>compiling SASS syntax to normal css;</li>
      <li>process our files with postCSS to automatically add prefixes on the css rules that need it;</li>
    </ul></p>`,
    `<h3>Bundling css</h3>`,
    `<p>But first things first: we need to include our stylesheets file in the main bundle, so let's create a <code>stylesheets/</code> folder into <code>"./src"</code>, add a <code>index.css</code> file and write some css rules in it, like this:</p>`,
    `<pre><code class="css post__code">
      // ./src/stylesheet/index.css
      .foo {
        color: red;
        font-size: 30px;
        font-style: italic;
      }

      .bar {
        color: blue;
        font-size: 10px;
        font-weight: bold;
      }
    </pre></code>
    <p class="post__caption">./src/stylesheet/index.css</p>`,
    `<p>Now we can import <code>index.css</code> in our entry point file, like we did for the javascript in the previous part, to have something like this:</p>`,
    `<pre><code class="javascript post__code">
      // ./src/index.js
      import scripts from './javascript/';

      import styles from './stylesheets/index.css';
    </pre></code>
    <p class="post__caption">./src/index.js</p>`,
    `<p>Then we can run webpack and ... receive an error ! That's because webpack can not understand css (it is not javascript of course), we need a loader to be able to process it, specifically we need <a href="https://github.com/webpack-contrib/css-loader" target="_blank">css-loader</a>, you can install it with <code>npm install --save-dev css-loader</code> as stated in the docs.</p>`,
    `<p>Now we need to add a rule inside <code>webpack.config.js</code> to catch all .css files and apply this new loader to be able to bundle them with the javascript:</p>`,
    `<pre><code class="javascript post__code">
      // ./webpack.config.js
      ...
      {
        test: /\.css$/, // get all .css files
        use: ['css-loader'] // apply css-loader to them
      }
    </pre></code>
    <p class="post__caption">./webpack.config.js</p>`,
    `<p>This time we got no errors and if we check our <code>bundle.js</code> we can see a bunch of weird code has been added: that's our css contained in <code>index.css</code>. As you probably thinking right now, that's not very useful: we need to take that css out from the bundle and put it in a place the browser can actually make use of it, the easiest way to achive this in webpack is by using another loader, called <a href="https://github.com/webpack-contrib/style-loader" target="_blank">style-loader</a>.</p>`,

    `<p>style-loader takes all our css and injects it in a <code>&lt;style&gt;</code> tag in the DOM. Let's move on and install it with <code>npm install style-loader --save-dev</code> then we edit <code>webpack.config.js</code> to instruct webpack to actually use it:</p>`,

    `<pre><code class="javascript post__code">
      // ./webpack.config.js
      ...
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // also apply style-loader to every .css file
      }
    </pre></code>
    <p class="post__caption">./webpack.config.js</p>`,

    `<p>To appreciate the result this time we really need something we left behind: the HTML ! So we add a <code>index.html</code> in our <code>./dist/</code> folder, and write a basic html page layout, like this:</p>`,

    `<pre><code class="xml post__code">
      // ./dist/index.html
      &lt;!doctype html&gt;
      &lt;html lang="en"&gt;
        &lt;head&gt;
        &lt;/head&gt;
        &lt;body&gt;
          &lt;h1 class="foo"&gt;that's foo&lt;/h1&gt;
          &lt;h2 class="bar"&gt;that's bar&lt;/h2&gt;
          &lt;script src="./bundle.js"&gt;&lt;/script&gt;
        &lt;/body&gt;
      &lt;/html&gt;
    </pre></code>
    <p class="post__caption">./dist/index.html</p>`,
    `<p>Now if you open that file in the browser you'll see the css injected in the DOM and the results applied to the html.</p>`,
    `<h3>Extracting the style</h3>`,
    `<p>By now there is still a thing that you probably don't like, the style injected in the DOM instead of a dedicated file, but we can easily fix that with a plugin: <a href="https://github.com/webpack-contrib/extract-text-webpack-plugin">extract-text-webpack-plugin</a>. Install it with <code>npm install --save-dev extract-text-webpack-plugin</code> and change <code>webpack.config.js</code> like this:</p>`,
    `<pre><code class="javascript post__code">
    // webpack.config.js
    const path = require('path');
    const ExtractTextPlugin = require("extract-text-webpack-plugin"); // require the plugin

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
      },
      module: {
        rules: [
          {
            test: /.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          },
          {
            test: /\.css$/, // get every .css file, as we did before
            use: ExtractTextPlugin.extract({ // this time apply ExtractTextPlugin to them, which uses css-loader as an
                                             // internal loader and style-loader (the one we used before) as fallback
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ],
      },
      plugins: [
        new ExtractTextPlugin("styles.css"), // set up the plugin with the name to use in the output file (refer to the options section in the docs)
      ]
    }
    </pre></code>
    <p class="post__caption">./webpack.config.js</p>`,
    `<p>Running webpack with this config will produce another file in the <code>./src/dist/</code> folder, specifically it will produce our <code>styles.css</code> containing all style-related code imported in the assets' entry point. <br> Of course, to see the results in the html you need to explicitely link it like you would normally do with any other stylesheet file.</p>`,
    `<h3>Compiling SASS</h3>`,
    `<p>Writing css through a framework that allows a kind of high-level syntax is becoming a must in frontend development, one of the most used and popular extension to achieve this is <a href="http://sass-lang.com/" target="_blank">SASS</a>, so our next goal will be make webpack compile SASS into css for us.</p>`,
    `<p>First we need to install <a href="https://github.com/webpack-contrib/sass-loader" target="_blank">sass-loader</a>, with <code>npm install sass-loader --save-dev</code>, this loader requires <a href="https://github.com/sass/node-sass" target="_blank">node-sass</a> to compile the assets, so we need to install it as well with <code>npm install node-sass --save-dev</code>.</p>`,
    `<p>Then we need a simple update on <code>webpack.config.js</code>:</p>`,
    `<pre><code class="javascript post__code">
    // webpack.config.js
    ...
    {
      test: /\.scss$/, // now we look for .scss (or .sass or both of them, just change the regEx)
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'sass-loader'] // here we add sass-loader to be used with css-loader
      })
    }
    ...
    </pre></code>
    <p class="post__caption">./webpack.config.js</p>`,
    `<p>After this we can rename <code>index.css</code> to <code>index.scss</code> and refactor it with some sass syntax, like this:</p>`,
    `<pre><code class="css post__code">
      // ./src/stylesheet/index.scss

      $red: #ad0c1e;
      $blue: #0b579e;

      .foo {
        color: $red;
        font-size: 30px;
        font-style: italic;
      }

      .bar {
        color: $blue;
        font-size: 10px;
        font-weight: bold;
      }
    </pre></code>
    <p class="post__caption">./src/stylesheet/index.scss</p>`,
    `<p>Remember to update the filename also in the import statement in the assets' entry point <code>./src/index.js</code>. After this you will be able to write your style using sass syntax with webpack automatically compiling it to css.</p>`,
    `<h3>Add postCss with autoprefixer</h3>`,
    `<p>As last goal we are going to add a very useful loader that takes away the pain of adding all the prefixes needed by some css rules in order to support all browsers, we are talking about <a href="https://github.com/postcss/postcss-loader" target="_blank">postcss-loader</a> with <code>autoprefixer</code>.</p>`,
    `<p>As usual it can be installed with <code>npm install postcss-loader --save-dev</code> and the <code>webpack.config.js</code> needs to be updated like this:</p>`,
    `<pre><code class="javascript post__code">
    // webpack.config.js
    ...
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          'css-loader',
          { // here we need extended syntax to configure postcss, so we use as object instead of a simple string with the name of the loader
            loader: 'postcss-loader', // the loader to be used
            options: { // options of the loader
              plugins: [require('autoprefixer')()] // plugin to be used by the loader, in our case just autoprefixer (no need to explicitly install it)
            }
          },
          'sass-loader'
        ]
      })
    }
    </pre></code>
    <p class="post__caption">./webpack.config.js</p>`,
    `<p>To try it out we can add some css rules that need prefixes on them, <code>display: flex;</code> is a good example, let's update our <code>index.scss</code> with another class:</p>`,
    `<pre><code class="css post__code">
      // ./src/stylesheet/index.scss

      $red: #ad0c1e;
      $blue: #0b579e;

      .foo {
        color: $red;
        font-size: 30px;
        font-style: italic;
      }

      .bar {
        color: $blue;
        font-size: 10px;
        font-weight: bold;
      }

      .flex-it-out {
        display: flex;
      }
    </pre></code>
    <p class="post__caption">./src/stylesheet/index.scss</p>`,
    `<p>Running webpack now will produce the same file as it did previously, but this time you'll see that the class <code>.flex-it-out</code> comes with all the needed prefixes.</p>`,
    `<h3>Conclusions</h3>`,
    `<p>In this second part we covered how to handle the style's assets to speed up the development and by now you have a basic frontend pipeline that can be applied in any project. <br>There are more loaders out there that you can plug in into this build, like <a href="https://github.com/Va1/browser-sync-webpack-plugin" target="_blank">browser-sync</a> or <a href="https://github.com/statianzo/webpack-livereload-plugin" target="_blank">livereload</a>, just follow the docs and you'll see that the method is the same or very similar to the loaders we used here.</p>`
  ]
};

module.exports = {
  en: postEn
}