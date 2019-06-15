'use strict';

const {validationResult} = require('express-validator/check');

const { UserService } = require('../services');

class AuthAdminController {

    /**
     * @description iniciar session
     * @param req
     * @param res
     */
    static async login(req, res) {
        const errors = validationResult(req).formatWith(({msg}) => {
            return msg;
        });
        if (errors.isEmpty()) {
            const values = req.body;
            const data = await UserService.login(values);
            if( data) {
                return res.status(200).json( data);
            }
            return res.status(422).json( { message: 'Usuario/Clave erronea'});
        }
        return res.status(422).json({errors: errors.mapped()});
    }

    /**
     * @description cerrar session
     * @param req
     * @param res
     */
    static async logout(req, res) {
        const token = req.headers.authorization.split(" ")[1];
        console.log('-----------', token)
        await UserService.logout(token);
        return res.status(204).json({});
    }

}

module.exports = AuthAdminController;
