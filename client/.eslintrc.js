module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['next/core-web-vitals', 'plugin:react/recommended', '@tanstack/query', 'plugin:react/jsx-runtime', 'xo'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/prefer-query-object-syntax": "error"
  },
};
