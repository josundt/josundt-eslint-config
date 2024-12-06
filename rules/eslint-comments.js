import plugin from "eslint-plugin-eslint-comments";
import { ConfigUtil } from "../utils/config-util.js";

export default ConfigUtil.getPluginConfig({
    plugin: plugin,
    namespace: "eslint-comments",
    rules: {
        "eslint-comments/disable-enable-pair": "warn",
        "eslint-comments/no-aggregating-enable": "warn",
        "eslint-comments/no-duplicate-disable": "warn",
        "eslint-comments/no-unlimited-disable": "warn",
        "eslint-comments/no-unused-enable": "warn",
        "eslint-comments/no-unused-disable": "warn"
    }
});
