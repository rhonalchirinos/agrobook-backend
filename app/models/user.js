
const bookshelf = require('../../server/data-base');

module.exports =  bookshelf.Model.extend({
  tableName: 'users'
});
