module.exports = {
  ignorePatterns: ['!.eslintrc.js', '!.babelrc.js', '!.storybook/**/*.(js|ts)'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // append by me
    'no-inner-declarations': 'off',
    'max-classes-per-file': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    // '': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          'spec/**',
          'test/**',
          'tests/**',
          '**/__tests__/**'
        ],
        optionalDependencies: false
      }
    ],
    'no-console': 'off'
  }
}
