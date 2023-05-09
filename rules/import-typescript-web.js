module.exports = {
    extends: ["./import-typescript-node.js"],
    rules: {
        "import/no-nodejs-modules": "error" // Disallowed: import * as path from "path"; Allowed: import * as path from "node:path";
    }
};
