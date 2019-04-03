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
    "prettier/prettier": "error",
    "guard-for-in": 0,
    "max-len": 0,
    "no-nested-ternary": 0,
    "no-console": 0,
    "global-require": 0,
    "new-cap": 0,
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/label-has-for": 0,
    "import/prefer-default-export": 0,
    "import/imports-first": 0,
    semi: [2, "always"],
    "no-plusplus": 0,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-indent": [2, 2],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-absolute-path": 0,
    "import/no-duplicates": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "func-names": 0,
    "no-return-assign": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "arrow-parens": 0,
    "one-var": 0,
    "prefer-const": 0,
    "consistent-return": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/sort-comp": 0,
    "import/no-mutable-exports": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "react/no-danger": 0,
    "eol-last": 0,
    "react/no-unused-prop-types": 0,
    "one-var-declaration-per-line": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-no-bind": 0,
    "no-script-url": 0,
    "no-alert": 0,
    indent: [0, 2],
    "linebreak-style": 0,
    "object-curly-newline": 0,
    "react/no-array-index-key": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-to-interactive-role": 0,
    "no-restricted-syntax": 0,
    "prefer-arrow-callback": 0,
    "spaced-comment": 0,
    camelcase: 0
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
