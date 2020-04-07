module.exports = {
    "extends": [
        "plugin:import/typescript"
    ],
    "plugins": [
        "import"
    ],
    "rules": {
        "import/no-default-export": "off",
        "import/no-deprecated": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-internal-modules": "off",
        "import/no-unassigned-import": "error",
        "import/order": "off"
    }
};
