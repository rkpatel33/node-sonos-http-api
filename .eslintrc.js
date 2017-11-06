module.exports = {
    'extends': [
        'eslint-config-airbnb-es5',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended'
    ],
    'plugins': [
        'import',
        'json',
        'jsx-a11y',
        'node',
        'react'
    ],
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'jquery': true
    },
    'rules': {
        'import/no-unresolved': [
            'error',
            {'commonjs': true, 'amd': true, 'caseSensitive': true}
        ],
        'indent': ['warn', 2,  {'SwitchCase': 1}],
        'comma-dangle': ['error', 'never'],
        'no-unused-vars': 'warn',
        'no-var': 'warn',
        'one-var': 'warn',
        'no-console': 'off',
        'spaced-comment': 'off',
        'func-names': 'off',
        'max-len': ['off', { 'ignoreComments': true }],
        'newline-per-chained-call': 'off',
        'vars-on-top': 'off',
        'no-debugger': 'warn',
        'array-callback-return': 'error',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/no-did-mount-set-state': 'off',
        'react/no-did-update-set-state': 'off',
        'object-curly-spacing': ['error', 'always'],
        'react/jsx-curly-spacing': ['error', {"when": "always"}]
        // 'lines-between-class-members': ['error', 'always'] // DOES NOT WORK
    },
    'globals': {
        'document': true,
        'localStorage': true,
        'window': true,
        'branch': true,
        // 'chrome': true
    }
};