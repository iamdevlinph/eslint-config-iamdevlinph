module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "html",
    "prettier",
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "react/forbid-prop-types": 0, // for object prop type,
    "no-console": ["error", { allow: ["error"] }],
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "no-unused-vars": ["error", {
      "args": "none"
    }],
    "quotes": [2, "single"],
    "react/no-unescaped-entities": 0,
    "react/no-typos": 1,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80,
      }
    ]
  },
};
