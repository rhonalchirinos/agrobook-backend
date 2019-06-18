
'use strict';

module.exports = {
    address: {
        isLength: { options: { max: 255 } },
        isString: {
            errorMessage: { msg: 'La direccion debe ser menor a 255' },
        },
        optional: false,
        isEmpty: { negated: true }
    },
    seed: {
        isLength: { options: { max: 255 } },
        isString: {
            errorMessage: { msg: 'La direccion debe ser menor a 255' },
        },
        optional: false,
        isEmpty: { negated: true }
    },
    farmer_id: {
        isNumeric: { errorMessage: 'DEBERIA SER UN NUMERO ' }
    }
};
