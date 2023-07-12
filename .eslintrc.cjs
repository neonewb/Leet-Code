module.exports = {
	"root": true,
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": { "project": ["./tsconfig.json"] },
	"ignorePatterns": ['.eslintrc.cjs', '*.md', '*.json'],
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"indent": ["error", "tab"],
		"quotes": ["warn", "single"],
		"semi": ["warn", "never"],
	}
}
