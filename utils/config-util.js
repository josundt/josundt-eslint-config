import tsParser from "@typescript-eslint/parser";

/** @typedef {import("eslint").Linter.Config} Config */
/** @typedef {import("eslint").ESLint.Plugin} Plugin */
/** @typedef {import("eslint").Linter.RulesRecord RulesRecord} */
/** @typedef {import("eslint").Linter.LanguageOptions} LanguageOptions */
/** @typedef {Pick<import("eslint").Linter.Config, "settings" | "plugins" | "rules">} SettingsPluginsAndRules */
/** @typedef {{globals: readonly Record<string, boolean>; ecmaVersion: number; files?: string[]; tsConfig?: string }} CreateTsConfigOptions */
/** @typedef {{plugin: Plugin; namepace: string; rules: RulesRecord; templateNames?: string[]; settings?: Record<string, any> }} GetPluginConfigOptins */
export class ConfigUtil {
    /**
     * Creates ESLint configuration language options for TypeScript.
     *
     * @param {readonly Record<string, boolean>} globals
     * @param {number} ecmaVersion
     * @param {string} [tsConfig="tsconfig.json"]
     * @return {LanguageOptions}
     */
    static createTsLangOptions(
        globals,
        ecmaVersion,
        tsConfig = "tsconfig.json"
    ) {
        return {
            ecmaVersion: ecmaVersion,
            globals: { ...globals },
            parser: tsParser,
            parserOptions: {
                ecmaVersion: ecmaVersion,
                project: tsConfig,
                sourceType: "module"
            }
        };
    }

    /**
     * Merges settings, plugins, and rules from multiple ESLint configs.
     *
     * @param  {...SettingsPluginsAndRules>} configs
     * @returns {SettingsPluginsAndRules}
     */
    static mergeSettingsPluginsAndRules(...configs) {
        return configs.reduce((acc, config) => {
            return {
                settings: {
                    ...(acc.settings ?? {}),
                    ...(config.settings ?? {})
                },
                plugins: {
                    ...(acc.plugins ?? {}),
                    ...(config.plugins ?? {})
                },
                rules: {
                    ...(acc.rules ?? {}),
                    ...(config.rules ?? {})
                }
            };
        }, {});
    }

    /**
     * Creates ESLint configuration for TypeScript.
     *
     * @param {CreateTsConfigOptions} options
     * @param  {...SettingsPluginsAndRules>} configs
     * @return {Config}
     */
    static createTsConfig(options, ...configs) {
        return {
            files: options.files ?? ["**/*.{js,mjs,cjs,ts,mts,mjs}"],
            languageOptions: ConfigUtil.createTsLangOptions(
                options.globals,
                options.ecmaVersion,
                options.tsConfig ?? "tsconfig.json"
            ),
            ...ConfigUtil.mergeSettingsPluginsAndRules(...configs)
        };
    }

    /**
     *
     * @param {GetPluginConfigOptins} options
     * @returns {SettingsPluginsAndRules}
     */
    static getPluginConfig(options) {
        const result = {
            plugins: {},
            rules: {},
            settings: {}
        };

        const { plugin, namespace, templateNames, rules, settings } = options;

        result.plugins[namespace] = plugin;

        if ((templateNames ?? []).length) {
            for (const templateName of templateNames) {
                const templateConfig =
                    "flatConfigs" in plugin
                        ? plugin.flatConfigs[templateName]
                        : plugin.configs[templateName];
                if (!templateConfig) {
                    throw new Error(
                        `Could not find template config for "${templateName}"`
                    );
                }
                result.rules = {
                    ...(templateConfig.rules ?? {}),
                    ...result.rules
                };
                if (templateConfig.settings) {
                    result.settings = {
                        ...templateConfig.settings,
                        ...result.settings
                    };
                }
            }
        }

        result.rules = {
            ...result.rules,
            ...rules
        };

        result.settings = {
            ...result.settings,
            ...settings
        };

        return result;
    }
}
