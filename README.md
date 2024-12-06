# @josundt/eslint-config #

ESLint ruleset including required ESLint plugins for josundt TypeScript projects

## Usage ##
1. Make sure you have installed and configured `@josundt/prettier-config` first

2. Install this package
    ```bash
    npm install @josundt/eslint-config
    ```

3. Create an `eslint.config.js` file in the root directory of your project with approximately the following content:
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

    All configurations:
    * `["@josundt/eslint-config/ts-browser"]` (for browser environment code).    
    * `["@josundt/eslint-config/ts-node"]` (for node environment code).
    * `["@josundt/eslint-config/ts-jest-browser"]` (for Jest tests for browser environment code).
    * `["@josundt/eslint-config/ts-jest-node"]` (for Jest tests for node environment code).


4. Add `lint:ts` script to your project's package.json file:
    ```javascript
    {
        // ...
        "scripts": {
            // ...
            "lint:ts": "eslint src test --format visualstudio"
            // ...
        }
        // ...
    }
    ```

5. Test the script:
    ```bash
    npm run lint:ts
    ```

6. Task in Visual Studio Code: 
    - Add the following to `.vscode/tasks.json`:
    ```json
    {
      //...
      "tasks": [
        //...
        {
          "label": "lint:ts",
          "type": "shell",
          "command": "npx",
          "args": ["eslint", "src", "test", "-f", "stylish"],
          "group": "build",
          "problemMatcher": "$eslint-stylish"
        },
        //...
      ]
      //...
    }
    ```

7. Live Code Analysis in Visual Studio Code:
    - Install extension for VSCode: __ESLint (_dbaeumer.vscode-eslint_)__ 
