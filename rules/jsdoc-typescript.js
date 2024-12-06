import plugin from "eslint-plugin-jsdoc";

import { ConfigUtil } from "../utils/config-util.js";

export default ConfigUtil.getPluginConfig({
    plugin: plugin,
    namespace: "jsdoc",
    templateNames: ["recommended"],
    rules: {
        "jsdoc/require-jsdoc": "off",
        "jsdoc/no-types": "error",
        "jsdoc/require-param-type": "off",
        "jsdoc/require-returns-type": "off",
        "jsdoc/newline-after-description": "off",
        "jsdoc/no-undefined-types": "off",
        "jsdoc/check-tag-names": [
            "warn",
            {
                definedTags: [
                    "internal",
                    "constructor",
                    "export",
                    "extends",
                    "memberOf"
                ]
            }
        ]
    },
    settings: {
        jsdoc: {
            mode: "typescript",
            tagNamePreference: {
                augments: {
                    message:
                        "@extends is to be used over @augments as it is more evocative of classes than @augments",
                    replacement: "extends"
                }
            }
        }
    }
});
