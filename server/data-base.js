'use strict';

const knex = require('knex');
const bookshelf = require('bookshelf');

let connection = null;

if(process.env.DATABASE_URL) {
	console.log( 'DATABASE ',process.env.DATABASE_URL);
	connection = knex({
		client: 'pg',
		connection: {
			connectionString: process.env.DATABASE_URL,
			ssl: true,
		}
	});

} else {
	connection = knex({
		client: 'pg',
		connection: {
			host:'127.0.0.1',
			user: 'rhonal',
			password: '123456',
			database: 'agrobook',
			charset: 'utf8'
		}
	});
}

module.exports = bookshelf(connection);
 