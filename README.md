# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

nuxt の ssr モードなので、genarate コマンドを叩かないと static ファイルが出来上がりません。
.github/yaml ファイル 2 つとも

- name: Build
  run: npm run build
  これを
- name: Build
  run: npm run generate

          また、generateでは、distではなく、.outputにつくられるので、

  firebase.json を以下に変更
  {
  "hosting": {
  "public": ".output/public",
  "ignore": [
  "firebase.json",
  "**/.*",
  "**/node_modules/**"
  ],
  "rewrites": [
  {
  "source": "**",
  "destination": "/index.html"
  }
  ]
  }
  }

firebase emulators:start
これをたたいたら無事表示できました。

netlify に変更
