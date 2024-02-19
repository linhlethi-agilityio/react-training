## OVERVIEW

- Build an Shoppe web site
- The features includes:

  - Homepage
    - ProductList
    - Search Products
    - Sort Products
  - ProductDetailPage
    - ProductDetail
  - CartPage
    - CartItemList
    - Change quantity product
    - Remove product
    - CartSummary
  - LoginPage
    - LoginForm

- Design: [figma](<https://www.figma.com/file/hzs1lkW5TzXMYaYb0L9AG4/Shoppe-(Community)>)
- Grid system: Desktop
- Browser support: chrome, microsoft edge

## GET STARTED

- Clone project: `git@gitlab.asoft-python.com:linh.lethi/training-react.git`
- Checkout branch: `git checkout feature/shoppe`
- Go to folder shoppe: `cd shoppe`
- Install packages dependencies: `pnpm install`
- Create data in folder: src/data/db.json
- Run db: `json-server src/data/db.json -m ./node_modules/json-server-auth`
- Run Webpage: `pnpm run dev`
- Run storybook `pnpm run storybook`

## PREREQUISITES

- Git: version 2.38.0.windows.1
- Node: version 16.17.1
- pnpm: version 7.17.1
- Typescript: 4.8.4
- vite: 3.2.3

## REFERENCES

- Apply Coding style: [link](https://www.browserstack.com/guide/coding-standards-best-practices)
- Apply storybook: [link](https://storybook.js.org/blog/storybook-for-vite/)
- Handbook [link](https://reactjs.org/docs/getting-started.html)
