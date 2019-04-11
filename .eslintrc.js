module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier',
    'pug'
  ],
  // add your custom rules here
  rules: {
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 0
    }],
    semi: [2, 'never'],
    quotes: ['error', 'single'],
    'no-console': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'template-curly-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true
      }
    ],
    'space-before-function-paren': ['error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
