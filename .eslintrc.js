module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "no-console": "off",
    "no-shadow": "off",
    "no-param-reassign": "off",
    "import/no-extraneous-dependencies": "off",
    "react/no-unescaped-entities": 0,
    "react/no-unused-prop-types": 0,
    "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
