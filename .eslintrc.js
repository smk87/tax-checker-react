module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	plugins: ['react', '@typescript-eslint', 'prettier'],
	env: {
		browser: true,
		jasmine: true,
		jest: true,
		es6: true,
	},
	rules: {
		'prettier/prettier': ['error', { singleQuote: true }],
		'@typescript-eslint/camelcase': 'off',
		'no-prototype-builtins': 'off',
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
};
