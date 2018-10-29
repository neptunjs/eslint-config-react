'use strict';

module.exports = {
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: 'eslint-config-cheminfo',
  plugins: ['react'],
  settings: {
    react: {
      version: '16.6'
    }
  },
  rules: {
    'import/no-unassigned-import': ['warn', { allow: ['**/*.css'] }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-boolean-value': 0,
    'react/jsx-child-element-spacing': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-brace-presence': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    'react/jsx-handler-names': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-depth': 0,
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': 1,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
    'react/jsx-pascal-case': 2,
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-sort-default-props': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-tag-spacing': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    'react/button-has-type': 2,
    'react/no-access-state-in-setstate': 1,
    'react/no-array-index-key': 1,
    'react/no-danger': 1,
    'react/no-danger-with-children': 1,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': 2,
    'react/no-redundant-should-component-update': 2,
    'react/no-render-return-value': 2,
    'react/no-typos': 2,
    'react/no-unknown-property': 2,
    'react/no-unused-state': 2,
    'react/no-will-update-set-state': 2,
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2
  }
};
