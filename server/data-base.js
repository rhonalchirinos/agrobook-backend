'use strict';

const knex = require('knex');
const bookshelf = require('bookshelf');

const connection = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'rhonal',
		password: '123456',
		database: 'agrobook',
		charset: 'utf8'
	}
});

module.exports = bookshelf(connection);
