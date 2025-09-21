import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js + TypeScript recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom overrides
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      /* Next.js rules */
      "@next/next/no-img-element": "off",
      "@next/next/no-css-tags": "off",

      /* TypeScript rules */
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",

      /* React rules */
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "off"
    }
  }
];

export default eslintConfig;
