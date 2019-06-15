
const bookshelf = require('../../server/data-base');

module.exports = bookshelf.Model.extend({
  tableName: 'tokens',
  user: function () {
    return this.belongsTo( require('./user'));
  }
});
