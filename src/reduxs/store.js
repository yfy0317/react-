import persistState from "redux-localstorage";

("use strict");

const { createStore, combineReducers, compose } = require("redux");
const vars = require("./reducers/vars");
const objs = require("./reducers/objs");
const map = require("./reducers/map");

const mainReducer = combineReducers({
  vars,
  objs,
  map
});
const createPersistentStore = compose(persistState())(createStore);
export default (module.exports = createPersistentStore(mainReducer));
