module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
    ],
    "parserOptions": {
        parser: "@babel/eslint-parser",
        "ecmaVersion": 11,
        "requireConfigFile": false,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // we should always disable console logs and debugging in production
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "vue/no-unused-components": "off",
        "vue/no-v-html": "off",
    },
};
