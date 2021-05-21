module.exports = {
  plugin: ["stylelint-scss"],
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "font-family-no-missing-generic-family-keyword": null,
    "at-rule-no-unknown": null, //scssで使える @include などにエラーがでないようにする
  },
};
