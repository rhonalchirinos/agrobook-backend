
'use strict';

const { User } = require('./../models');

const bcrypt = require('bcrypt');

class UserService {

    /**
     * @description all
     * @return users[]
     */
    static async all() {
        return await User.fetchAll();
    }

    /**
     * @description login
     * @return users || null
     */
    static async login({ rut, password }) {
        const user = await User.where('rut', rut).fetch();
        const match = await bcrypt.compare(password, user.get('password'));
        if (match) {
            const token = await bcrypt.hash(Math.random().toString(), 10);
            // store token 
            return {
                token: token,
                type: 'Bearer',
                user: user
            };
        }
        return null;
    }

}

module.exports = UserService;
