import typescript from '@typescript-eslint/parser';

export default [
  {
    rules: {
      semi: ['error', 'always'],
      'prefer-const': 'error',
    },
    files: ['**/*.ts'],
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescript,
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  }
];