module.exports = {
    plugins: ["react", "promise", "jest"],
    settings: {
        react: {
            version: "16.13"
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jasmine: true,
        jest: true,
        "jest/globals": true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:promise/recommended",
        "plugin:jest/recommended",
        "prettier"
    ],
    rules: {
        "max-len": ["warn", 160],
        "no-unused-vars": [
            "error",
            {
                args: "none"
            }
        ],
        "no-console": "off",
        "react/display-name": "off",
        "react/prop-types": "warn",
        "react/no-string-refs": "warn",
        "react/no-unescaped-entities": "off",
        "no-undef": "error", // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undef-init": "error", // disallow use of undefined when initializing variables
        "no-undefined": "warn", // disallow use of undefined variable (off by default)
        "no-unused-vars": "warn", // disallow declaration of variables that are not used in the code
        "no-use-before-define": "error", // disallow use of variables before they are defined
        "generator-star-spacing": 1,
        "array-bracket-spacing": 1,
        "arrow-parens": 1,
        "no-await-in-loop": 1,
        "no-mixed-spaces-and-tabs": "warn",
        eqeqeq: "warn",
        "no-constant-condition": ["error", { checkLoops: false }]
    }
};
