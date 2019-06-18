
'use strict';

module.exports = {
    planting_date: {
        isLength: { options: { max: 255 } },
        isString: {
            errorMessage: { msg: 'debe ser un string' },
        },
        optional: false,
        isEmpty: { negated: true }
    },
    floor_power: {
        isInt: { options: { min:0, max: 100 }, errorMessage: 'Valor invalido ' },
    }
};
