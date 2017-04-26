const posts = require('./posts/');
const homepage = require('./homepage.js');
const postsIndex = { it: {}, en: {} };

module.exports = {
  pages: {
    homepage,
    postsIndex,
  },
  posts: posts.allPosts,
};