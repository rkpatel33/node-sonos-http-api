module.exports = {
    'extends': [
        'eslint-config-airbnb-es5',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    'plugins': [
        'import',
        'json',
        'node'
    ],
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'env': {
        'browser': true,
        'commonjs': true,
        // 'es6': true,
        'jquery': true
    },
    'rules': {
        'import/no-unresolved': [
            'error',
            {'commonjs': true, 'amd': true, 'caseSensitive': true}
        ],
        'indent': ['warn', 4,  {'SwitchCase': 1}],
        'comma-dangle': ['error', 'never'],
        'no-unused-vars': 'warn',
        'no-var': 'warn',
        'one-var': 'warn',
        'no-console': 'off',
        'spaced-comment': 'off',
        'func-names': 'off',
        'max-len': ['off', { 'ignoreComments': true }],
        'newline-per-chained-call': 'off',
        'vars-on-top': 'off'
    },
    'globals': {
        'document': true,
        'localStorage': true,
        'window': true,
        'branch': true,
        // 'chrome': true
    }
};