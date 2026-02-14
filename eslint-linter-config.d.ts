import type { Linter } from "eslint";

interface TsParserOptions {
    /** The `tsconfig.json` path (relative to project root) */
    project: string;
    ecmaVersion?: number;
    sourceType: "module";
}

interface TsLanguageOptions {
    ecmaVersion?: number;
    globals?: Linter.Globals;
    parser?: Linter.Parser;
    parserOptions: TsParserOptions;
}

interface TsLinterConfig extends Omit<Linter.Config, "languageOptions"> {
    languageOptions: TsLanguageOptions;
}

declare const exp: TsLinterConfig;
export default exp;
