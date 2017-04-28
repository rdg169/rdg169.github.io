// const posts = [
//   {
//     id: 0,
//     title: '0 Tempor velit elit ipsum cillum duis esse ipsum',
//     shortDescr: 'Eu in pariatur incididunt sit cupidatat proident consectetur in commodo pariatur deserunt anim sunt. Nostrud elit ad ea consectetur velit.',
//     date: {
//       value: '2017-04-26T16:01:27+01:00',
//       label: '26 April 2017'
//     },
//     tags: [
//       {
//         url: '/images/tags/javascript.jpg',
//         caption: 'JavaScript'
//       }
//     ]
//   },
//   {
//     id: 1,
//     title: '1 Tempor velit elit ipsum cillum duis esse ipsum',
//     shortDescr: 'Eu in pariatur incididunt sit cupidatat proident consectetur in commodo pariatur deserunt anim sunt. Nostrud elit ad ea consectetur velit.',
//     thumb: 'https://source.unsplash.com/random/400x400'
//   },
//   {
//     id: 2,
//     title: '2 Tempor velit elit ipsum cillum duis esse ipsum',
//     shortDescr: 'Eu in pariatur incididunt sit cupidatat proident consectetur in commodo pariatur deserunt anim sunt. Nostrud elit ad ea consectetur velit.',
//     thumb: 'https://source.unsplash.com/random/400x400'
//   },
//   {
//     id: 3,
//     title: '2 Tempor velit elit ipsum cillum duis esse ipsum',
//     shortDescr: 'Eu in pariatur incididunt sit cupidatat proident consectetur in commodo pariatur deserunt anim sunt. Nostrud elit ad ea consectetur velit.',
//     thumb: 'https://source.unsplash.com/random/400x400'
//   },
//   {
//     id: 4,
//     title: '2 Tempor velit elit ipsum cillum duis esse ipsum',
//     shortDescr: 'Eu in pariatur incididunt sit cupidatat proident consectetur in commodo pariatur deserunt anim sunt. Nostrud elit ad ea consectetur velit.',
//     thumb: 'https://source.unsplash.com/random/400x400'
//   },
//   {
//     id: 5,
//     title: '2 Tempor velit elit ipsum cillum duis esse ipsum',
//     shortDescr: 'Eu in pariatur incididunt sit cupidatat proident consectetur in commodo pariatur deserunt anim sunt. Nostrud elit ad ea consectetur velit.',
//     thumb: 'https://source.unsplash.com/random/400x400'
//   },
// ];

const posts = {
  it: [],
  en: []
}
const constAndLet = require('./constAndLet');
posts.it.push(constAndLet.it);
posts.en.push(constAndLet.en);

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