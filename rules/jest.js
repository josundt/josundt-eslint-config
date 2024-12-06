import plugin from "eslint-plugin-jest";
import { ConfigUtil } from "../utils/config-util.js";

export default ConfigUtil.getPluginConfig({
    plugin: plugin,
    namespace: "jest",
    templateNames: ["recommended"],
    rules: {
        "jest/unbound-method": "error"
    }
});
