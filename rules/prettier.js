import plugin from "eslint-plugin-prettier";
import { ConfigUtil } from "../utils/config-util.js";

export default ConfigUtil.getPluginConfig({
    plugin: plugin,
    namespace: "prettier",
    rules: {
        "prettier/prettier": "error"
    }
});
