module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		indent: ['error', 'tab'],
		// 'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-use-before-define': ['error', { functions: true, classes: true }],
		'no-template-curly-in-string': 'error',
		// Class Rules
		'class-methods-use-this': 'error',
		'accessor-pairs': 'error',

		// Switch Case Rules
		'default-case': 'error',
		'default-case-last': 'error',

		//ES6
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-spacing': 'error',
		'no-confusing-arrow': ['error', { allowParens: true }],
		'no-duplicate-imports': ['error', { includeExports: true }],
		'no-var': 'error',
		'prefer-const': 'error',
		'no-empty-function': 'error',
		'prettier/prettier': [
			'error',
			{
				semi: false,
				singleQuote: true,
				tabWidth: 2,
				useTabs: true,
				trailingComma: 'none',
				endOfLine: 'auto'
			}
		]
	}
}
