module.exports = {
  root: true,
  env: {
    node: true,
    es6:true,
  },
  extends: ["plugin:vue/essential","plugin:prettier/recommended", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
