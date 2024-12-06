import { ConfigUtil } from "../utils/config-util.js";

import { typescriptEslintRules } from "./typescript-eslint/rules.js";
import { typescriptEslintExtensionrules } from "./typescript-eslint/extensionrules.js";
import esLintConfig from "./eslint.js";

import plugin from "@typescript-eslint/eslint-plugin";

export default {
    ...ConfigUtil.mergeSettingsPluginsAndRules(esLintConfig, {
        plugins: { "@typescript-eslint": plugin },
        rules: {
            ...plugin.configs["recommended"].rules,
            ...plugin.configs["recommended-requiring-type-checking"].rules,
            ...typescriptEslintRules,
            ...typescriptEslintExtensionrules
        }
    })
};
