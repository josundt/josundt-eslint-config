import globals from "globals";
import { ConfigUtil } from "./utils/config-util.js";

import commentsConfig from "./rules/eslint-comments.js";
import importTsNodeConfig from "./rules/import-typescript-node.js";
import jsdocTsConfig from "./rules/jsdoc-typescript.js";
import prettierConfig from "./rules/prettier.js";
import tsEslintConfig from "./rules/typescript-eslint.js";
import unicornConfig from "./rules/unicorn.js";

export default ConfigUtil.createTsConfig(
    {
        ecmaVersion: 2021,
        globals: globals.node,
        files: ["**/*.{js,mjs,cjs,ts,mts,mjs}"],
        tsConfig: "tsconfig.json"
    },
    commentsConfig,
    importTsNodeConfig,
    jsdocTsConfig,
    prettierConfig,
    tsEslintConfig,
    unicornConfig
);
