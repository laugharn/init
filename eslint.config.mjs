import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const config = [
  ...compat.extends('next', 'prettier', 'plugin:@typescript-eslint/recommended', 'plugin:jsx-a11y/recommended'),
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/no-anonymous-default-export': 'off',
      'sort-imports': [
        'warn',
        {
          ignoreCase: true,
        },
      ],
    },
  },
]

export default config
