"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initial = {
    text: '',
};
module.exports = (state = initial, action) => {
    switch (action.type) {
        case 'COMMON_STORE#SET_TEXT':
            return {
                ...state,
                text: action.payload,
            };
        default: return state;
    }
};
