const path = require('path');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: false
});

// const posts = require('./src/contents/');

const renderPages = () => {
  const postPages = posts[0].map(post => {
    return {
      from: './src/html/index.njk',
      to: `./posts/${post.slug}.html`,
      context: post
    }
  });
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
        template: testerino
    })
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
  plugins: [
      extractSass
  ]
};
