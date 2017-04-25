const posts = require('./posts/');
const homepage = require('./homepage.js');

module.exports = {
  homepage,
  posts: posts.allPosts
};