import plugin from "eslint-plugin-jasmine";
import { ConfigUtil } from "../utils/config-util.js";

export default ConfigUtil.getPluginConfig({
    plugin: plugin,
    namespace: "jasmine",
    templateNames: ["recommended"],
    rules: {
        "jasmine/no-suite-dupes": ["error", "branch"],
        "jasmine/no-spec-dupes": ["error", "branch"],
        "jasmine/no-describe-variables": "off",
        "jasmine/new-line-between-declarations": "off", // formatting rule conflicting with formatters (e.g. prettier)
        "jasmine/new-line-before-expect": "off" // formatting rule conflicting with formatters (e.g. prettier)
    }
});
