const header = require('./mixins/header.js');
const footer = require('./mixins/footer.js');

module.exports = {
  it: {
    header: Object.assign({}, header.it, { activePageIndex: 0 })
  },
  en: {
    header: Object.assign({}, header.en, { activePageIndex: 0 })
  }
}