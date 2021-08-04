module.exports = {
    env: {
        node: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: [
        '@typescript-eslint',
        "react",
        "react-hooks",
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
    },
};