// eslint.config.js
import { defineFlatConfig } from "eslint-define-config";

export default defineFlatConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // دعم Mocha
        describe: "readonly",
        it: "readonly",
      },
    },
    rules: {
      "no-var": "error",
      "semi": ["error", "always"],
      "no-unused-vars": "warn",
      "prefer-const": "error",
      "quotes": ["error", "single"],
    },
  },
]);
