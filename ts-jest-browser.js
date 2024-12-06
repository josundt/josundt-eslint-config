import globals from "globals";
import webOptions from "./ts-browser.js";
import jestConfig from "./rules/jest.js";
import jasmineConfig from "./rules/jasmine.js";
import { ConfigUtil } from "./utils/config-util.js";

const config = ConfigUtil.createTsConfig(
    {
        ecmaVersion: 2019,
        globals: {
            ...globals.browser,
            ...globals.jest,
            ...globals.jasmine
        },
        files: ["**/?(*.)+(spec).{js,mjs,cjs,ts,mts,cts}?(x)"],
        tsConfig: "tsconfig.json"
    },
    webOptions,
    jestConfig,
    jasmineConfig
);

// Switch off unbound method rules in tests
config.rules["@typescript-eslint/unbound-method"] = "off";

export default config;
