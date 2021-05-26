module.exports = {
  plugin: ["stylelint-scss"],
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "font-family-no-missing-generic-family-keyword": null,
    "at-rule-no-unknown": null, //scssで使える @include などにエラーがでないようにする
    "declaration-colon-newline-after": null, //複数行の時のコロン後に改行がなくてもよい
    "no-descending-specificity": null,
  },
};
