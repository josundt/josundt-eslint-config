module.exports = {
    "extends": [
        "plugin:jest/recommended"
    ],
    "env": {
        "jest/globals": true
    },
    "plugins": [
        "jest"
    ],
    "rules": {
        "jest/unbound-method": "error"
    }
};
