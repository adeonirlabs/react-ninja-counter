module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@forgedev-br/eslint-config/vite'],
  rules: {
    'react/jsx-sort-props': 'warn',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/function-component-definition': 'off',
      },
    },
    {
      files: ['postcss.config.mjs'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}
