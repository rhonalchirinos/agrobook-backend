'use strict';

const express = require('express');
const auth = require('./auth');

const router = express.Router(), free = express.Router();
router.use(auth);

const { checkSchema } = require('express-validator/check');

const { WellcomeController, AuthController, ContractController, FarmerController } = require('../app/controllers');
const { AuthValidation, ContractValidation, ContractVisitValidation, ContractCloseValidation } = require('../app/validations');

module.exports = (app) => {

    free.get('/', WellcomeController.index);
    free.post('/login', checkSchema(AuthValidation), AuthController.login);

    router.delete('/logout', AuthController.logout);

    router.get('/farmers', FarmerController.index);

    router.get('/contracts', ContractController.index);
    router.post('/contracts', checkSchema(ContractValidation), ContractController.create);
    router.get('/contracts/:id', ContractController.show);
    router.delete('/contracts/:id', ContractController.delete);

    router.post('/contracts/:id/view', checkSchema(ContractVisitValidation), ContractController.view);
    router.post('/contracts/:id/close', checkSchema(ContractCloseValidation), ContractController.close);


    app.use('', free);
    app.use('', router);
};
