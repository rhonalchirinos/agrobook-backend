
'use strict';

const { User, Token, Contract } = require('./../models');

class ContractService {

    /**
     * @description all
     * @return contract[]
     */
    static async all(user, status) {
        if (user.get('role_id') === 1) {
            if (status) {
                return await Contract.forge().where({ status: status }).orderBy('created_at', 'DESC').fetchAll({
                    withRelated: ['user', 'farmer']
                });
            }
            return await Contract.forge().orderBy('created_at', 'DESC').fetchAll({
                withRelated: ['user', 'farmer']
            });
        }
        if (status) {
            return await Contract.forge().where({ status: status }).where('farmer_id', user.get('id')).orderBy('created_at', 'DESC').fetchAll({
                withRelated: ['user', 'farmer']
            });
        }
        return await Contract.forge().orderBy('created_at', 'DESC').where('farmer_id', user.get('id')).fetchAll({
            withRelated: ['user', 'farmer']
        });
    }

    /**
     * @description show
     * @return contract[]
     */
    static async show(id) {
        return await Contract.where('id', id).fetch({
            withRelated: ['user', 'farmer']
        });
    }

    /**
     * @description delete
     * @return contract[]
     */
    static async delete(id) {
        const contract = await Contract.where('id', id).fetch({
            withRelated: ['user', 'farmer']
        });
        await contract.destroy();
        return contract;
    }


    /**
     * @description create a contract
     * @param value { address seeed planting_date farmer_id } 
     * @return contract
     */
    static async view(id, value) {
        const contract = await Contract.where('id', id).fetch({
            withRelated: ['user', 'farmer']
        });
        await contract.save({
            floor_power: value.floor_power,
            planting_date: value.planting_date,
        });
        return contract;
    }

    /**
     * @description create a contract
     * @param value { address seeed planting_date farmer_id } 
     * @return contract
     */
    static async close(id, value) {
        const contract = await Contract.where('id', id).fetch({
            withRelated: ['user', 'farmer']
        });
        await contract.save({
            observation: value.observation,
            status: 'F'
        });
        return contract;
    }

    /**
     * @description create a contract
     * @param value { address seeed planting_date farmer_id } 
     * @return contract
     */
    static async create(value) {
        const data = await Contract.where({ 'farmer_id': value.farmer_id, 'status': 'N' }).fetch();
        if (data) {
            return null;
        }
        const contract = new Contract(value);
        await contract.save();
        return contract;
    }

}

module.exports = ContractService;
