
const bookshelf = require('../../server/data-base');

module.exports = bookshelf.Model.extend({
  tableName: 'contracts',
  user() {
    return this.belongsTo(require('./user'))
  },
  farmer() {
    return this.belongsTo(require('./user'), 'farmer_id')
  }
});
