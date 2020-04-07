# @josundt/eslint-config #

ESLint ruleset including required ESLint plugins for josundt TypeScript projects

## Usage ##

1. Install this package
    ```bash
    npm install @josundt/eslint-config
    ```

2. Create an `.eslintrc` file in the root directory of your project with the following content:
    ```javascript
    {
        "extends": ["@josundt"]
    }
    ```
    > `["@josundt"]` is the default configuration for __typescript__ __web__ projects with __jasmine__ unit tests

    Other configurations:
    * `["@josundt/eslint-config/typescript-web"]` (same as default; only without __jasmine__ linting support).

    * `["@josundt/eslint-config/typescript-node-jasmine"]` (same as default; but without __browser__ environment).

    * `["@josundt/eslint-config/typescript-node"]` (same as default; but without __browser__ environment and __jasmine__ linting support) .


3. Add `lint:ts` script to your project's package.json file:
    ```javascript
    {
        // ...
        "scripts": {
            // ...
            "lint:ts": "eslint ./src --format visualstudio --ext .ts,.tsx"
            // ...
        }
        // ...
    }
    ```

4. Test the script:
    ```bash
    npm run lint:ts
    ```

5. Live Code Analysis in Visual Studio Code:
    - Add a `.eslintignore` file in the root directory of your project with the following content:
        ```text
        # Ignore js files; only analyze typescript files:
        **/*.js
        ```
    - Install extension for VSCode: __ESLint (_dbaeumer.vscode-eslint_)__ 
