module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],

  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-unused-vars': 'warn',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
      rules: {
        'no-unused-vars': 'warn',
      },
    },

    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'no-unused-vars': 'warn',
      },
    },
  ],
};
