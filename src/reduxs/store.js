import persistState from "redux-localstorage";

("use strict");

let { createStore, combineReducers, compose } = require("redux");
let vars = require("./reducers/vars");
let objs = require("./reducers/objs");
let map = require("./reducers/map");

let mainReducer = combineReducers({
  vars,
  objs,
  map
});
const createPersistentStore = compose(persistState())(createStore);
export default (module.exports = createPersistentStore(mainReducer));
