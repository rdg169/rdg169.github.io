const posts = {
  it: [],
  en: []
}
const constAndLet = require('./constAndLet');
posts.en.push(constAndLet.en);

const webpackIntroOne = require('./webpackIntroOne');
posts.en.push(webpackIntroOne.en);

const webpackIntroTwo = require('./webpackIntroTwo');
posts.en.push(webpackIntroTwo.en);

const findById = id => {
  let foundPost = {};
  postsEn.forEach(post => id === post.id ? foundPost = post : null);
  return foundPost;
};

const findByIds = (ids, lang) => {
  const results = ids.map(id => {
    let found = false;
    let record = {};
    for (let index = 0; !found && index < posts[lang].length; index++) {
      if (id === posts[lang][index].id) {
        found = true;
        record = posts[lang][index];
      }
    }
    return record;
  });
  return results;
};

module.exports = {
  findById,
  findByIds,
  it: posts.it,
  en: posts.en,
};