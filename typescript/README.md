# TypeScript config

For adding TypeScript support to a project.

## Packages required

| Package                                                                            | Description                                |
| ---------------------------------------------------------------------------------- | ------------------------------------------ |
| [`yarn add -D typescript`](https://yarn.pm/typescript)                             | Main TypeScript packag                     |
| [`yarn add -D tslint`](https://yarn.pm/tslint)                                     | TypeScript linter                          |
| [`yarn add -D tslint-config-prettier`](https://yarn.pm/tslint-config-prettier)     | TypeScript config for Prettier integration |
| [`yarn add -D typescript-tslint-plugin`](https://yarn.pm/typescript-tslint-plugin) | Integrate TSLint better into VSCode        |

If you are using Webpack and Babel 7:

| Package                                                                            | Description                 |
| ---------------------------------------------------------------------------------- | --------------------------- |
| [`yarn add -D @babel/preset-typescript`](https://yarn.pm/@babel/preset-typescript) | Babel preset for TypeScript |

## Files

| File                             | Description                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [tsconfig.json](./tsconfig.json) | TypeScript configuration with support for Babel, strict mode, and React. Please change `src/` in the includes path! |
| [tslint.json](./tslint.json)     | TypeScript linter config.                                                                                           |
| [package.json](./package.json)   | Scripts config                                                                                                      |

If you're using Webpack and Babel:

| File                                     | Description           |
| ---------------------------------------- | --------------------- |
| [webpack.config.js](./webpack.config.js) | Webpack configuration |
| [babel.config.js](./babel.config.js)     | Babel configuration   |
