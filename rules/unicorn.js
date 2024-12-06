import plugin from "eslint-plugin-unicorn";

export default {
    plugins: { unicorn: plugin },
    rules: {
        "unicorn/filename-case": [
            "error",
            {
                case: "kebabCase"
            }
        ]
    }
};
