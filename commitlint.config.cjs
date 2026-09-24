module.exports = {
  extends: ["@commitlint/config-conventional"],
  defaultIgnores: false,
  rules: {
    "subject-case": [0],
    "body-max-line-length": [0],
    "footer-max-line-length": [0],
  },
};
