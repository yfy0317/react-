export const SET_VARS = "SET_VARS";
export const SET_OBJS = "SET_OBJS";
export const APPEND_OBJS = "APPEND_OBJS";

export function setVars(key, value) {
  return {
    type: SET_VARS,
    key,
    value
  };
}

export function setObjs(key, value) {
  return {
    type: SET_OBJS,
    key,
    value
  };
}

export function appendObjs(key, objKey, objValue) {
  return {
    type: APPEND_OBJS,
    key,
    value: typeof objKey === "object" ? objKey : _.object([[objKey, objValue]])
  };
}

export function mapSet(...keyPath) {
  const value = keyPath.pop();
  return {
    type: "MAP_SET",
    keyPath,
    value
  };
}

export function mapDelete(...keyPath) {
  return {
    type: "MAP_DELETE",
    keyPath
  };
}

export default exports;
