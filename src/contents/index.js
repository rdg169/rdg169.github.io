const posts = require('./posts/');
const homepage = require('./homepage.js');
const postsIndex = require('./postsIndex');
const about = require('./about');

module.exports = {
  pages: {
    homepage,
    about,
    postsIndex,
  },
  posts: posts.allPosts,
};