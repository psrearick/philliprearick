module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    plugins: ['gridsome'],
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'plugin:gridsome/recommended',
        'plugin:vue/essential',
        'plugin:prettier/recommended',
        '@vue/prettier',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/multi-word-component-names': 'off',
        semi: ['error', 'always'],
    },
};
