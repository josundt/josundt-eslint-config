import nodeConfig from "./import-typescript-node.js";

export default {
    ...nodeConfig,
    rules: {
        ...nodeConfig.rules,
        "import/no-nodejs-modules": "error" // Disallowed: import * as path from "path"; Allowed: import * as path from "node:path";
    }
};
