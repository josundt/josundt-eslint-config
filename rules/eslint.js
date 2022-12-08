module.exports = {
    "extends": [
        "eslint:recommended"
    ],
    "rules": {
        "arrow-body-style": "error",
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "brace-style": ["error", "1tbs"],
        "class-methods-use-this": "off", // Warn when methods could be static
        "comma-spacing": ["error", {"before": false, "after": true }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "complexity": ["warn", { "max": 20 }],
        "curly": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-location": ["error", "property"],
        "eqeqeq": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "function-call-argument-newline": ["warn", "consistent"],
        "function-paren-newline": ["warn", "multiline-arguments"],
        "guard-for-in": "error",
        "grouped-accessor-pairs": "error",
        "handle-callback-err": "error",
        "id-denylist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Function",
            "Undefined"
            //"undefined"
        ],
        "id-match": "error",
        "indent": [
            "warn",
            4,
            {
                "ObjectExpression": "first",
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                },
                "SwitchCase": 1,

                // Fix to decorator indentation problem
                "ignoredNodes": [
                    "FunctionExpression > .params[decorators.length > 0]",
                    "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
                    "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
                ]
            }
        ],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "strict" }],
        "keyword-spacing": "error",
        "max-classes-per-file": ["off", 5],
        "max-depth": ["warn", { "max": 5 }], // default 4
        "max-params": ["off", { "max": 6 }], // default 3 - SWITCHED OFF - does not work well with constructor injection
        "max-statements-per-line": ["warn", { "max": 1 }], // default 1
        "max-statements": ["warn", { "max": 100 }], // default 50
        "max-len": [
            "warn",
            {
                "ignorePattern": "^import |^\\s*\\/\\/ |^\\s*\\/\\*\\*",
                "code": 180
            }
        ],
        "max-lines": ["off", 2000],
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": "error",
        "no-constant-binary-expression": "error",
        "no-duplicate-imports": "error",
        "no-empty-function": ["error", {
            //allow: [/*"functions", "arrowFunctions", "generatorFunctions", "methods", "generatorMethods", "getters", "setters", "constructors", "asyncFunctions", "asyncMethods"*/]
        }],
        "no-empty-static-block": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-implicit-coercion": ["error", { "allow": ["!!"] }],
        "no-implied-eval": "error",
        "no-inner-declarations": "off", // Switched off from recommended rules, gave too many issues
        "no-invalid-this": "error",
        "no-multi-spaces": "warn",
        "no-multi-str": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-multiple-empty-lines": "warn",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-restricted-syntax": [
            "off", // Below - rules to require Async suffix on async methods - not good enough
            // {
            //     "selector": "FunctionDeclaration[async=false][id.name=/Async$/]",
            //     "message": "Function ending in 'Async' must be declared async"
            // },
            {
                "selector": "FunctionDeclaration[async=true][id.name!=/Async$/][id.name!=/^(configure)$/]",
                "message": "Async function name must end in 'Async'"
            },
            // {
            //     "selector": "MethodDefinition[value.async=false][key.name=/Async$/]",
            //     "message": "Method ending in 'Async' must be declared async"
            // },
            {
                "selector": "MethodDefinition[value.async=true][key.name!=/Async$/][key.name!=/^(activate|deactivate|canActivate|canDeactivate|attached|bind)$/]",
                "message": "Async method name must end in 'Async'"
            },
            // {
            //     "selector": "Property[value.type=/FunctionExpression$/][value.async=false][key.name=/Async$/]",
            //     "message": "Function ending in 'Async' must be declared async"
            // },
            {
                "selector": "Property[value.type=/FunctionExpression$/][value.async=true][key.name!=/Async$/]",
                "message": "Async function name must end in 'Async'"
            },
            // {
            //     "selector": "VariableDeclarator[init.type=/FunctionExpression$/][init.async=false][id.name=/Async$/]",
            //     "message": "Function ending in 'Async' must be declared async"
            // },
            {
                "selector": "VariableDeclarator[init.type=/FunctionExpression$/][init.async=true][id.name!=/Async$/]",
                "message": "Async function name must end in 'Async'"
            },
            // "ForInStatement"
        ],
        "no-return-await": "error",
        "no-sequences": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all",
                "builtinGlobals": false,
                "ignoreOnInitialization": false,
                "allow": [] // array of identifier names for which shadowing is allowed
            }
        ],
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "warn",
        "no-undef-init": "error",
        "no-unneeded-ternary": [
            "error",
            {
                "defaultAssignment": true
            }
        ],
        "no-unused-expressions": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none",
                "destructuredArrayIgnorePattern": "^_"
            }
        ],
        "no-use-before-define": "error",
        "no-useless-constructor": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": ["warn", { "terms": ["todo"] }],
        "object-curly-newline": ["warn", { "consistent": true }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["warn", { "allowAllPropertiesOnSameLine": true }],
        "object-shorthand": [
            "error",
            "never"
        ],
        "one-var": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "error",
            { "blankLine": "always", "prev": ["directive", "import"],                 "next": "*" },
            { "blankLine": "any",    "prev": ["directive", "import"],                 "next": ["directive", "import"] },

            { "blankLine": "always", "prev": "*",                                     "next": ["export", "class", "function", "iife"] },
            { "blankLine": "always", "prev": ["export", "class", "function", "iife"], "next": "*" },

            // { "blankLine": "always", "prev": "*",                                     "next": "return" }, // Newline before return

            // { "blankLine": "always", "prev": "*",                                     "next": "multiline-block-like" }, // Newline BEFORE multiline block
            // { "blankLine": "always", "prev": "multiline-block-like",                  "next": "*" }                     // Newline AFTER  multiline block
        ],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-template": "error",
        "quotes": [
            "error",
            "double"
        ],
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "radix": "error",
        "require-await": "error",
        "require-unicode-regexp": "error",
        "rest-spread-spacing": ["error", "never"],
        "return-await": "error",
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": ["error", {"before": false, "after": true}],
        "semi-style": ["error", "last"],
        "space-before-blocks": [
            "warn",
            "always"
        ],
        "space-before-function-paren": [
            "warn",
            {
                "anonymous": "always",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "space-in-parens": [
            "warn",
            "never"
        ],
        "space-infix-ops": "warn",
        "switch-colon-spacing": ["error", {"after": true, "before": false}],
        "template-curly-spacing": ["error", "never"],
        "unicode-bom": ["error", "never"],
        "yoda": "error"
    }
};
