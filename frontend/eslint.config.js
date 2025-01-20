/* eslint-disable import/no-default-export */
// import { FlatCompat } from "@eslint/eslintrc"
// import path from "path"
// import { fileURLToPath } from "url"
import featureSliced from "@conarti/eslint-plugin-feature-sliced"
import pluginJs from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import cssPlugin from "eslint-plugin-css"
import importPlugin from "eslint-plugin-import"
import eslintPluginPrettier from "eslint-plugin-prettier"
import pluginReact from "eslint-plugin-react"
import tseslint from "typescript-eslint"

// All code below is to make .eslintrc configs flat
// ------------------------------------------------------------
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const compat = new FlatCompat({
//     baseDirectory: __dirname,
// })
// ------------------------------------------------------------

/** @type {import('eslint').Linter.Config[]} */
export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    pluginReact.configs.flat.recommended,
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    {
        plugins: {
            react: pluginReact,
            prettier: eslintPluginPrettier,
            featureSliced: featureSliced,
            import: importPlugin,
            cssPlugin: cssPlugin,
        },
        rules: {
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            semi: ["error", "never"],
            "import/no-default-export": "error",
            "import/no-unresolved": "off",
            "prettier/prettier": "warn",
            "cssPlugin/no-dupe-properties": "error",
            "no-console": ["error", { allow: ["warn", "error"] }],
            "featureSliced/layers-slices": [
                "error",
                {
                    ignorePatterns: [
                        "@shared/**/*",
                        "@app/**/*",
                        "@widgets/**/*",
                    ],
                },
            ],
            "featureSliced/absolute-relative": "error",
            "featureSliced/public-api": "error",
            "import/order": [
                "error",
                {
                    alphabetize: { order: "asc", caseInsensitive: true },
                    "newlines-between": "always",
                    pathGroups: [
                        "@processes/**",
                        "@pages/**",
                        "@widgets/**",
                        "@features/**",
                        "@entities/**",
                        "@shared/**",
                    ].map((pattern) => ({
                        pattern,
                        group: "internal",
                        position: "after",
                    })),
                    pathGroupsExcludedImportTypes: ["builtin"],
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                    ],
                },
            ],
        },
        settings: {
            settings: {
                "import/resolver": {
                    typescript: true,
                    node: true,
                },
                react: {
                    version: "detect",
                },
            },
        },
        ignores: ["**/node_modules/**/*", "**/dist/**/*"],
    },
]
