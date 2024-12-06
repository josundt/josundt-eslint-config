import plugin from "eslint-plugin-import";
import { ConfigUtil } from "../utils/config-util.js";

export default ConfigUtil.getPluginConfig({
    plugin: plugin,
    namespace: "import",
    templateNames: ["typescript"],
    rules: {
        "import/extensions": [
            // Ensure all local .ts file imports use .js extension
            "error",
            "ignorePackages"
        ],
        "import/no-commonjs": "error", // Disallow require() syntax - only esm syntax allowed
        "import/no-default-export": "off",
        "import/no-deprecated": "error",
        "import/no-duplicates": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-internal-modules": "off",
        "import/no-nodejs-modules": "off",
        "import/no-unassigned-import": "error",
        "import/order": "off"
    }
});
