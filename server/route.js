'use strict';

const express = require('express');
const auth = require('./auth');

const router = express.Router(), free = express.Router();
router.use(auth);

const { checkSchema } = require('express-validator/check');

const { WellcomeController, AuthController } = require('../app/controllers');
const { AuthValidation } = require('../app/validations');

module.exports = (app) => {

    free.get('/', WellcomeController.index);
    free.post('/login', checkSchema(AuthValidation), AuthController.login)

    router.delete('/logout', AuthController.logout)


    app.use('', free);
    app.use('', router);
};
