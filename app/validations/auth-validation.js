'use strict';

module.exports = {
    rut: {
        isLength: {
            options: {
                min: 2,
            },
        },
        isString: {
            errorMessage: {
                msg: '$ngx_type_string'
            },
        },
        optional: false,
        isEmpty: {
            negated: true
        }
    },


    password: {
        isLength: {
            options: {
                min: 2
            },
        },
        isString: {
            errorMessage: {
                msg: '$ngx_type_string'
            },
        },
    }
};


