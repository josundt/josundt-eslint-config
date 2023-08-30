const eslintRuleSet = require("../eslint.js");
const { deepMergeObjects } = require("../../utils/merge.js");

const eslintRules = eslintRuleSet.rules;

// Map of all the typescript-eslint extensions.
// If extension rule has additional properties compared to standard eslint rule:
// If the map value is a boolean:
//     If true the options from the standard rule will be used as is; if false the rule will be switched off.
// If the map value is an object:
//     The object will be merged merged with standard rule (rule object 1).
// If the map value is an array:
//     The items of the array will be added as a new rule options object.
// If the map value is a function:
//     The standard eslint options object will be passed as parameters, the return statement will be added as options.

const extensions = new Map([
    [
        "class-methods-use-this",
        false
        // {
        //     ignoreOverrideMethods: false,
        //     ignoreClassesThatImplementAnInterface: false
        // }
    ],
    ["default-param-last", true],
    [
        "dot-notation",
        {
            allowPrivateClassPropertyAccess: false,
            allowProtectedClassPropertyAccess: false,
            allowIndexSignaturePropertyAccess: false
        }
    ],
    ["init-declarations", true],
    [
        "lines-between-class-members",
        {
            exceptAfterOverload: true
        }
    ],
    ["no-array-constructor", true],
    ["no-dupe-class-members", true],
    ["no-duplicate-imports", false], // typescript-eslint 5.25.0: deprecated in favour of import/no-duplicates
    [
        "no-empty-function",
        {
            allow: [
                "private-constructors",
                "protected-constructors" /* "decoratedFunctions", "overrideMethods" */
            ]
        }
    ],
    ["no-extra-semi", true],
    ["no-implied-eval", true],
    ["no-invalid-this", false],
    ["no-loop-func", true],
    ["no-loss-of-precision", true],
    ["no-magic-numbers", true],
    ["no-redeclare", true],
    ["no-restricted-imports", true],
    [
        "no-shadow",
        v => {
            const o = {
                ...v,
                ignoreTypeValueShadow: true,
                ignoreFunctionTypeParameterNameValueShadow: true
            };
            delete o["ignoreOnInitialization"]; // Temporary bug in @typescript/eslint "no-shadow" extension rule - "ignoreOnInitialization" property considered invalid
            return o;
        }
    ],
    ["no-throw-literal", true],
    ["no-unused-expressions", true],
    ["no-unused-vars", false],
    ["no-use-before-define", false],
    ["no-useless-constructor", false],
    ["require-await", true],
    ["return-await", true]
]);

// console.log(extensionRules);
// console.log(`Converted ${Object.keys(extensionRules).filter(k => !k.startsWith("@typescript")).length} of ${extensions.size} available extension rules`);
// console.log("Not converted:", Array.from(extensions.keys()).filter(k => !Object.keys(extensionRules).filter(k => !k.startsWith("@typescript")).includes(k)));

// Building eslint-typescript rules for existsing eslint rules and switching off original eslint rule
module.exports.typescriptEslintExtensionrules = Object.entries(
    eslintRules
).reduce((extRules, [key, value]) => {
    // Try to get from known extensions map
    const extension = extensions.get(key);

    // If found in known typescript eslint extension rules map
    if (extension !== undefined) {
        // Switch off standard eslint rule
        extRules[key] = "off";

        // Special handling of certain extension rules that need to be switched off:
        if (extension === false) {
            extRules[`@typescript-eslint/${key}`] = "off";
        } else {
            // If extension rule has extended options, merge with standard eslint rule options:
            if (extension !== true) {
                // Ensure value is array if only severity string:
                value = Array.isArray(value) ? [...value] : [value];
                if (Array.isArray(extension)) {
                    value.push(...extension);
                } else if (typeof extension === "object") {
                    // If array only contains severity string, push object
                    if (value.length === 1) {
                        value.push(extension);
                        // Else merge object
                    } else {
                        value[value.length - 1] = deepMergeObjects(
                            value[value.length - 1],
                            extension
                        );
                    }
                } else if (typeof extension === "function") {
                    const [, ...options] = value;
                    value[value.length - 1] = { ...extension(...options) };
                }
            }
            // Add extension rule value with the @typescript-eslint key prefix
            extRules[`@typescript-eslint/${key}`] = value;
        }
    }
    // else: if no extension rule exists, the standard eslint rule will be used through the "extends" configuration below

    return extRules;
}, {});
