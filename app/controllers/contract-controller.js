'use strict';

const { validationResult } = require('express-validator/check');

const { UserService, ContractService } = require('../services');

class ContractController {

    /**
     * @description cerrar session
     * @param req
     * @param res
     */
    static async index(req, res) {
        const user = req.user;
        const elements = await ContractService.all(user);
        return res.status(200).json(elements);
    }

    /**
     * @description create
     * @return contract[]
     */
    static async create(req, res) {
        const errors = validationResult(req).formatWith(({ msg }) => {
            return msg;
        });
        if (errors.isEmpty()) {
            const values = req.body;
            const user = req.user;
            values.user_id = user.id;
            const data = await ContractService.create(values);
            if (data) {
                return res.status(200).json(data);
            }
            return res.status(422).json({
                message: 'Este Agricultor ya tiene un contrato abierto',
                duplicate: true
            });
        }
        return res.status(422).json({ errors: errors.mapped() });
    }

    /**
     * @description create
     * @return contract[]
     */
    static async show(req, res) {
        const id = req.params.id;
        const data = await ContractService.show(id);
        return res.status(200).json(data);
    }

    /**
     * @description create
     * @return contract[]
     */
    static async view(req, res) {
        const errors = validationResult(req).formatWith(({ msg }) => {
            return msg;
        });
        if (errors.isEmpty()) {
            const values = req.body;
            const id = req.params.id;
            const data = await ContractService.view(id,values);
            return res.status(200).json(data);
        }
        return res.status(422).json({ errors: errors.mapped() });
    }

    /**
     * @description create
     * @return contract[]
     */
    static async close(req, res) {
        const errors = validationResult(req).formatWith(({ msg }) => {
            return msg;
        });
        if (errors.isEmpty()) {
            const values = req.body;
            const id = req.params.id;
            const data = await ContractService.close(id,values);
            return res.status(200).json(data);
        }
        return res.status(422).json({ errors: errors.mapped() });
    }

    /**
     * @description create
     * @return contract[]
     */
    static async delete(req, res) {
        const id = req.params.id;
        const data = await ContractService.delete(id);
        return res.status(204).json({});
    }

}

module.exports = ContractController;
