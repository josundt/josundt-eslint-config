import globals from "globals";
import nodeOptions from "./ts-node.js";
import jestConfig from "./rules/jest.js";
import jasmineConfig from "./rules/jasmine.js";
import { ConfigUtil } from "./utils/config-util.js";

const config = ConfigUtil.createTsConfig(
    {
        ecmaVersion: 2021,
        globals: {
            ...globals.node,
            ...globals.jest,
            ...globals.jasmine
        },
        files: ["**/?(*.)+(spec).{js,mjs,cjs,ts,mts,cts}?(x)"],
        tsConfig: "tsconfig.json"
    },
    nodeOptions,
    jestConfig,
    jasmineConfig
);

// Switch off unbound method rules in tests
config.rules["@typescript-eslint/unbound-method"] = "off";

export default config;
