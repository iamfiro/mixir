module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],
    "scope-enum": [2, "always", ["ui", "backend", "build", "docs", "deps"]],
    "header-max-length": [2, "always", 72],
    'references-empty': [2, 'never'], // Ensures there is at least one issue reference
  },
};
