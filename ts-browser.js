import globals from "globals";
import { ConfigUtil } from "./utils/config-util.js";

import commentsConfig from "./rules/eslint-comments.js";
import importTsBrowserConfig from "./rules/import-typescript-browser.js";
import jsdocTsConfig from "./rules/jsdoc-typescript.js";
import prettierConfig from "./rules/prettier.js";
import tsEslintConfig from "./rules/typescript-eslint.js";
import unicornConfig from "./rules/unicorn.js";

export default ConfigUtil.createTsConfig(
    {
        ecmaVersion: 2019,
        globals: globals.browser,
        files: ["**/*.{js,mjs,cjs,ts,mts,mjs}"],
        tsConfig: "tsconfig.json"
    },
    commentsConfig,
    importTsBrowserConfig,
    jsdocTsConfig,
    prettierConfig,
    tsEslintConfig,
    unicornConfig
);
