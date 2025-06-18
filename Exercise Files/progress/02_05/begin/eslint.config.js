export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        // Add Node.js globals if needed
      },
    },
    plugins: {
      // Add plugins here if needed
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    }
  },
];
