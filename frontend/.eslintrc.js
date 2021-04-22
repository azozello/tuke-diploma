module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'react-app',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        // "no-angle-bracket-type-assertion" is a react rule which is not available in the current eslint version anymore, that is why we disable it: https://github.com/typescript-eslint/typescript-eslint/issues/863
        '@typescript-eslint/no-angle-bracket-type-assertion': 0,
        // do not edit further rules here!
        // see: https://create-react-app.dev/docs/setting-up-your-editor#experimental-extending-the-eslint-config
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                '@typescript-eslint/no-var-requires': 2,
                '@typescript-eslint/no-unused-vars': 2,
                '@typescript-eslint/camelcase': 0,
                '@typescript-eslint/no-inferrable-types': 0,
                '@typescript-eslint/explicit-member-accessibility': 0,
                '@typescript-eslint/no-non-null-assertion': 0,
                '@typescript-eslint/explicit-function-return-type': 0,
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/indent': 0, // see https://github.com/typescript-eslint/typescript-eslint/issues/372,
                '@typescript-eslint/consistent-type-assertions': 0, // Disabled on introduction
                '@typescript-eslint/no-unused-expressions': 0, // Disabled on introduction
                'react-hooks/exhaustive-deps': 0,
                'no-debugger': 2,
                '@typescript-eslint/no-empty-function': 0,
                '@typescript-eslint/ban-ts-ignore': 0,
            },
        },
    ],
};
