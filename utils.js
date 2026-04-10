/** @typedef {import("./types").TsLinterConfig} TsLinterConfig */

/**
 * @param {string} path
 * @param {TsLinterConfig} cfg
 * @returns {TsLinterConfig}
 */
export function setTsConfig(path, cfg) {
    return {
        ...cfg,
        languageOptions: {
            ...(cfg.languageOptions ?? {}),
            parserOptions: {
                ...(cfg.languageOptions?.parserOptions ?? {}),
                project: path
            }
        }
    };
}
