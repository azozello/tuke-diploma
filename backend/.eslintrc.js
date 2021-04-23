module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        'valid-source-ids': 2,
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: "@typescript-eslint/parser",
            extends: [
                'plugin:@typescript-eslint/recommended',
            ],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 0, // TODO: fix and renable this rule (there are so many warnings right now)
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
                '@typescript-eslint/no-empty-function': 1,
                '@typescript-eslint/ban-ts-ignore': 'off',
            }
        },
    ]
};
