'use strict';

const { UserService } = require('./../services');

class WellcomeController {

    static async index(req, res) {
        return res.status(200).json({
            data: await UserService.all()
        });
    }

}

module.exports = WellcomeController;
