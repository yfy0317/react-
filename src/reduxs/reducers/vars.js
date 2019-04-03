const _ = require("lodash");
const actions = require("../actions");

module.exports = function(state = {}, action = {}) {
  if (action.type === actions.SET_VARS) {
    return _.assign({}, state, _.zipObject([action.key], [action.value]));
  }
  return state;
};
