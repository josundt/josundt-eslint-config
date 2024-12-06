# CHANGELOG #

## 5.6.x ##

ESLint was migrated from v8 to v9 which has some breaking changes.
Please follow this migration guide:

1. Delete old config file `.eslintrc`; create new config file `eslint.config.js` instead with content something like this:

```javascript
import tsBrowserConfig from "@josundt/eslint-config/ts-browser";
import tsJestBrowserConfig from "@josundt/eslint-config/ts-jest-browser";

// When the project has JEST tests
const config = [
    {
        ...tsBrowserConfig,
        files: ["src/**/*.ts"]
    },
    {
        ...tsJestBrowserConfig,
        files: ["test/**/?(*.)+(spec).ts?(x)"]
    }
];

// Otherwise
const config = { 
    ...tsBrowserConfig,  
    files: ["src/**/*.ts"]
};

export default config;
```


2. Remove `.eslintignore`; add the ignored rules to `ignores (string[])` property in the config object(s) in the new `eslint.config.js` config file instead

3. In typescript lint scripts in package.json; remove arguments `--ext ts` from command

4. In `.vscode/tasks.json`; ensure you remove arguments `["--ext, "ts"]` from task
