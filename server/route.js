'use strict';

const express = require('express');

const router = express.Router(), free = express.Router();
const {checkSchema} = require('express-validator/check');

const { WellcomeController, AuthController } = require('../app/controllers');
const { AuthValidation } = require('../app/validations'); 

module.exports = (app) => {

    router.get('/', WellcomeController.index);
    router.post('/login', checkSchema(AuthValidation), AuthController.login)

    app.use('', free);
    app.use('', router);
};
