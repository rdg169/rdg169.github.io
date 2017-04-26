const path = require('path');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: false
});

const { pages, contents } = require('./src/contents/');

const renderHomepage = () => {
  return Object.entries(pages.homepage).map(([lang, content]) => {
    if (lang === 'en')
      return {
        from: './src/html/homepage.njk',
        to: './index.html',
        context: content
      };
    return {
      from: './src/html/homepage.njk',
      to: `./${lang}/index.html`,
      context: content
    };
  });
};

const renderAbout = () => {

};

const renderPostsIndex = () => {
  return Object.entries(pages.postsIndex).map(([lang, content]) => {

  });
};

const renderPages = () => {
  const postPages = [];
  Object.entries(posts).map(([postName, postContent]) => {
    console.log(postName, postContent)
    let item = {};
    if (postName === 'homepage') {
      postPages.push({
        from: './src/html/homepage.njk',
        to: './index.html',
        context: postContent.en
      });
      postPages.push({
        from: './src/html/homepage.njk',
        to: './it/index.html',
        context: postContent.it
      });

    } else {
      item = {
        from: `./src/html/${postName}.njk`,
        to: `./posts/${post.slug}.html`,
        context: post
      }
    }
    // postPages.push(item);
  });
  console.log(postPages)
  return postPages;
};

module.exports = {
  entry: './src/assets/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new NunjucksWebpackPlugin({
      template: renderHomepage()
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    }),
    extractSass
  ],
  module: {
    rules: [{
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
                loader: "css-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
            }
          },
          {
                loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
    }]
  },
};
