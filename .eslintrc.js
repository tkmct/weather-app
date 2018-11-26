module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5",
        semi: false
      }
    ]
  }
};