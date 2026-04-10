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

export interface TsLinterConfig extends Omit<Linter.Config, "languageOptions"> {
    languageOptions: TsLanguageOptions;
}

export function setTsConfig(path: string, cfg: TsLinterConfig): TsLinterConfig;
