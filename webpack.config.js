const path = require('path');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: false
});

const { pages, postsEn } = require('./src/contents/');

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

const renderEnPosts = () => {
  return postsEn.map(content => {
    return {
      from: './src/html/postDetail/index.njk',
      to: `.${content.slug}.html`,
      context: content
    }
  });
}

const pagesToRender = renderHomepage().concat(renderPostsIndex(), renderAbout(), renderEnPosts());

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
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
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
      }
    ]
  },
};
