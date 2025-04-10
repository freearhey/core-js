import globals from "globals";
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        indent: ["error", 2],
        "linebreak-style": ["error", "unix"],

        quotes: ["error", "single", {
            avoidEscape: true,
        }],

        semi: ["error", "never"],
    }
}
);
