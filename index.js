const homepage = require('./homepage.js');
const postsIndex = require('./postsIndex');
const about = require('./about');
const postsDetail = require('./posts');

module.exports = {
  pages: {
    homepage,
    about,
    postsIndex,
  },
  postsIt: postsDetail.it,
  postsEn: postsDetail.en,
};