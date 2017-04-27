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
        from: './src/html/homepage/index.njk',
        to: './index.html',
        context: content
      };
    return {
      from: './src/html/homepage/index.njk',
      to: `./${lang}/index.html`,
      context: content
    };
  });
};

const renderAbout = () => {
  return Object.entries(pages.about).map(([lang, content]) => {
    return {
      from: './src/html/about/index.njk',
      to: `./${lang}/about.html`,
      context: content
    };
  });
};

const renderPostsIndex = () => {
  return Object.entries(pages.postsIndex).map(([lang, content]) => {
    return {
      from: './src/html/postsIndex/index.njk',
      to: `./${lang}/posts.html`,
      context: content
    }
  });
};

const renderPages = () => {
  const postPages = [];
  Object.entries(posts).map(([postName, postContent]) => {
    console.log(postName, postContent)
    let item = {};
    if (postName === 'homepage') {
      postPages.push({
        from: './src/html/homepage/index.njk',
        to: './index.html',
        context: postContent.en
      });
      postPages.push({
        from: './src/html/homepage/index.njk',
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

const pagesToRender = renderHomepage().concat(renderPostsIndex()).concat(renderAbout());

module.exports = {
  entry: './src/assets/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new NunjucksWebpackPlugin({
      template: pagesToRender
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
