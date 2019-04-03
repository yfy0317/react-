const actions = require("../actions");

module.exports = function(state = {}, action = {}) {
  if (action.type === actions.APPEND_OBJS) {
    const obj = _.assign({}, state[action.key], action.value);
    return _.assign({}, state, _.zipObject([action.key], [obj]));
  }

  if (action.type === actions.SET_OBJS) {
    return _.assign({}, state, _.zipObject([action.key], [action.value]));
  }

  return state;
};
