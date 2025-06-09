# vue-electron-starter

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# How to use (Windows)

```
$ npm run build
$ npm run packager
```

then execute ./out/Projectname/Projectname.exe

# How to create this repository

Init vue project:

```
$ npm create vue@latest

options I chosed:
Router(SPA development)
Pinia(state management)
ESLint(error prevention)
Prettier(code formatting)

$ cd vue-electron-starter
$ npm install
```

Install electron (dev only):

```
npm install electron --save-dev
```

Add 2 lines and **DELETE "type": "module"** in config.json:

```
{
    ...
    "main": "main.js",
    ...
  "scripts": {
    "start": "electron .",
    ...
  },
}
```

Add base: './' to vite.config.js like:

```
export default defineConfig({
  base: './',
  ...
})

```

change **createWebHistory** to **createWebHashHistory** in src/router/index.js:

```
import { createRouter, createWebHashHistory } from 'vue-router'
...
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  ...
})
```

create **main.js, preload.js** like this repository

build:

```
npm run build
```

run electron:

```
npm run start
```

# How to package

Install:

```
$ npm install electron-packager --save-dev
```

add 3 lines to package.json:

```
{
    ...
    "scripts": {
        "packager": "electron-packager ./ ProjName --platform=win32 --arch=x64 --icon=./dist/favicon.ico --out=./out --overwrite",
        "packager-linux": "electron-packager ./ ProjName --platform=linux --arch=x64 --icon=./dist/favicon.ico --out=./out --overwrite",
        "packager-mac": "electron-packager ./ ProjName --platform=darwin --arch=x64 --icon=./dist/favicon.ico --out=./out --overwrite",
        ...
    }
}
```

Package in windows:

```
$ npm run build
$ npm run packager
```

# Reference

vue quickstart: https://cn.vuejs.org/guide/quick-start.html

electron quickstart: https://www.electronjs.org/zh/docs/latest/tutorial/quick-start

vite+electron package: https://blog.csdn.net/m0_71071209/article/details/140429945
