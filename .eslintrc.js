module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    "parser": "babel-eslint",
    'extends': ['standard', "plugin:react/recommended"],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'opr': 'readonly',
        'safari': 'readonly',
        'isIE': 'readonly',
        'isChrome': 'readonly',
        'isOpera': 'readonly',
        '$': 'readonly',
        'classie': 'readonly',
        'Word': 'readonly',
        'L': 'readonly',
        'axios': 'readonly',

    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        "standard/computed-property-even-spacing": 0,
        "camelcase": 0,
        "no-tabs": 0,
        "no-return-assign": 0,
        "semi": [2, "always"],
        "no-string-refs": 0,
        "no-useless-escape": 0,
        "react/no-string-refs": 0,
    }
}
