
'use strict';

const { User, Token } = require('./../models');

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
     * @description decode token 
     * @return users[]
     */
    static async decodeToken( data) {
        
        const token = await Token.where('token', data).fetch( {
            withRelated: [
                'user'
            ]
        });
        if( token) {
            return token.relations.user;
        }
        return null;
    }
 
    /**
     * @description decode token 
     * @return users[]
     */
    static async logout(data) {
        const token = await Token.where('token', data).fetch();
        await token.destroy();
    }

    /**
     * @description login
     * @return users || null
     */
    static async login({ rut, password }) {
        const user = await User.where('rut', rut).fetch();
        if (!user){
            return null;
        }
        const match = await bcrypt.compare(password, user.get('password'));
        if (match) {
            const token = new Token({
                token: await bcrypt.hash(Math.random().toString(), 10),
                user_id: user.get('id')
            });
            await token.save();
            return {
                token: token.get('token'),
                type: 'Bearer',
                data: {
                    id: user.id,
                    rut: user.attributes.rut,
                    name: user.attributes.name,
                    last_name: user.attributes.last_name,
                    email: user.attributes.email,
                    role_id: user.attributes.role_id
                }
            };
        }
        return null;
    }

}

module.exports = UserService;
