const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const chalk = require('chalk');

app.use(bodyParser.json({ limit: '155mb' }));
app.use(bodyParser.urlencoded({ limit: '15mb', extended: true }));
app.use(cors());

app.use(express.static('public'));

require('./route')(app);
require('./data-base');
// require('../config/exception')(app);

const port = process.env.PORT || 3000;

app.listen(port, function () {

    console.log(`
   ************************
   *                      *
   * \tHOST: ${chalk.green('LOCALHOST')}   *
   * \tPORT: ${chalk.green(port)}        *
   *                      *
   ************************ `);

});






module.exports = app;
