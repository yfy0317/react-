"use strict";

let _ = require("lodash");
let actions = require("../actions");

module.exports = function(state = {}, action = {}) {
    if (action.type === actions.SET_VARS) {
        return _.assign({}, state, _.zipObject([action.key], [action.value]));
    }
    return state;
};
