const eslintrc = {
  extends: ["prettier", "airbnb"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    mocha: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  globals: {},
  settings: {}
};
if (process.env.NODE_ENV === "development") {
  Object.assign(eslintrc.rules, {
    "no-console": 0,
    "no-unused-vars": 0
  });
}

module.exports = eslintrc;
