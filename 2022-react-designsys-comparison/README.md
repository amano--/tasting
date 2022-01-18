## 概要

[ ぼくのかんがえた Next.js の構成 ](https://zenn.dev/nus3/articles/257d724e24a39b756b5a) をベースに、

- [ chakra-ui ](https://chakra-ui.com/)
- [ react spectrum ](https://react-spectrum.adobe.com/index.html)
- [ headlessui ](https://headlessui.dev/)
- [ vanilla-extract ](https://vanilla-extract.style/)

を比較検証

- ビジュアルリグレッションテストの検証
- GraphQL Code Generator の検証
  [ Typescript Apollo Nextjs ](https://www.graphql-code-generator.com/docs/plugins/typescript-apollo-next) を参考にした

### setup script

```
yarn add @adobe/react-spectrum
yarn add react-stately
yarn add react-aria

yarn add @headlessui/react

yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4


yarn add --dev eslint-config-airbnb-typescript
yarn add --dev @testing-library/react-hooks

yarn add @chakra-ui/hooks
yarn add @chakra-ui/utils

# [Mock Service Worker](https://storybook.js.org/addons/msw-storybook-addon)
yarn add --dev msw-storybook-addon

yarn add --dev @vanilla-extract/css @vanilla-extract/babel-plugin @vanilla-extract/webpack-plugin

yarn add -D graphql-codegen-apollo-next-ssr

```

以下元ネタの README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
