[ 2020 年初頭における Next.js をベースとしたフロントエンドの環境構築 ](https://qiita.com/syuji-higa/items/931e44046c17f53b432b) を参考にして構築した。

上記テンプレートをベースにして以下を追加した

typeorm

appolo

ant design

chakra UI

[ aspida ](https://github.com/aspidajs/aspida)

[ eslint-plugin-import ](https://github.com/benmosher/eslint-plugin-import)
[ eslint-plugin-jsx-a11y ](https://github.com/evcohen/eslint-plugin-jsx-a11y)
i
jsx(tsx) にアクセシビリティのルールを追加

npm install eslint-plugin-jsx-a11y --save-dev

TypeORM がデコレーターを使用しているため、Babel に
npm install --save-dev @babel/plugin-proposal-decorators

以下、テンプレートに書かれたいた README の内容

# Use

- [Next.js](https://nextjs.org/) ([React](https://ja.reactjs.org/))
- [TypeScript](https://www.typescriptlang.org/)
- [PWA](https://developer.mozilla.org/ja/docs/Web/Progressive_web_apps) ([next-offline](https://github.com/hanford/next-offline))
- [styled-components](https://styled-components.com/) + [styled-media-query](https://github.com/morajabi/styled-media-query)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [EditorConfig](https://editorconfig.org/) + [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/ja/) + [React Testing Library](https://testing-library.com/)
- [Stroybook](https://storybook.js.org/)
  - addons
    - [knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)
    - [actions](https://github.com/storybookjs/storybook/tree/master/addons/actions)
    - [storysource](https://github.com/storybookjs/storybook/tree/master/addons/storysource)
    - [viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport)
    - [storyshots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots)
    - [backgrounds](https://github.com/storybookjs/storybook/tree/master/addons/backgrounds)
    - [console](https://github.com/storybookjs/storybook-addon-console)
    - [links](https://github.com/storybookjs/storybook/tree/master/addons/links)
- [Husky](https://github.com/typicode/husky)

# Command

```sh
# dev
npm run dev

# build
npm run build

# start
npm run start
```

## Storybook

```sh
npm run storybook

# build
npu run build-storybook
```

## Lint

```sh
npm run lint

# auto fix
npm run lint -- --fix
```

## Test

```sh
npm test

# watch
npm test -- --watch

# update snapshot
npm test -- -u -t="[TargetName]"

# update snapshot all
npm test -- -u

# coverage
npm test -- --coverage
```

## Image Snapshot

```sh
# image snapshot (run while storybook running)
npm run puppeteer-storyshots

# update image snapshot (run while storybook running)
npm run puppeteer-storyshots -- -u -t="[TargetName]"

# update image snapshot all (run while storybook running)
npm run puppeteer-storyshots -- -u
```
