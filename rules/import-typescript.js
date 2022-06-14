module.exports = {
    "extends": [
        "plugin:import/typescript"
    ],
    "plugins": [
        "import"
    ],
    "rules": {
        "import/extensions": [ // Ensure all local .ts file imports use .js extension
            "error",
            "ignorePackages"
        ],
        "import/no-commonjs": "error", // Disallow require() syntax - only esm syntax allowed
        "import/no-nodejs-modules": "error", // Disallowed: import * as path from "path"; Allowed: import * as path from "node:path";
        "import/no-default-export": "off",
        "import/no-deprecated": "error",
        "import/no-duplicates": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-internal-modules": "off",
        "import/no-unassigned-import": "error",
        "import/order": "off"
    }
};
