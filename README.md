# Create a ESLint plugin using TypeScript

Use this template to create an ESLint project developed using TypeScript.

Includes test, build, lint and github workflow.

# Create an action from this template

Click the `Use this Template` and provide the new repo details for your action.

# Change the package name

Change the package name to `eslint-plugin-*` or `@*/eslint-plugin` in `package.json`, to ensure that ESLint can recognize your plugin name.

# Development

Install the dependencies

```shell
$ npm install
```

Build package

```shell
$ npm run build
```

Run test

```shell
$ npm run test
```

## Add rule

Add a rule to  `src/rules/*.ts`, `tests/rules/*.test.ts`, `docs/rules/*.md` and export it on `src/index.ts`

## Publish

```shell
$ npm run build
$ npm publish
```
