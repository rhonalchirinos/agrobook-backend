'use strict';

const { UserService } = require('../app/services');

const isAuth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(403).send({ message: 'Missing Authorization token in headers' });
        }
        const token = req.headers.authorization.split(' ')[1];
        const user = await UserService.decodeToken(token);
        req.user = user;
        if (user) {
            next();
        } else {
            return res.status(403).send({ message: 'Missing Authorization token in headers' });
        }
    } catch (err) {
        console.error(err)
        next(err);
    }
};

module.exports = isAuth;