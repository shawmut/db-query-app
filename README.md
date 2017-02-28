# Shawmut Database Query Application


Built with [Electron](http://electron.atom.io/), [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux), [React Router](https://github.com/reactjs/react-router), [Webpack](http://webpack.github.io/docs/), [React Transform HMR](https://github.com/gaearon/react-transform-hmr). This is a work in progress.

## Install

* **Note: requires a node version >= 6 and an npm version >= 3.**
* **Also uses Yarn**

```bash
$ yarn install
```

## Run

Run these two commands __simultaneously__ in different console tabs.

```bash
$ yarn hot-server
$ yarn start-hot
```

or run two servers with one command

```bash
$ yarn dev
```

## CSS Modules

This boilerplate out of the box is configured to use [css-modules](https://github.com/css-modules/css-modules).

All `.css` file extensions will use css-modules unless it has `.global.css`.

If you need global styles, stylesheets with `.global.css` will not go through the
css-modules loader. e.g. `app.global.css`

If you want to import global css libraries (like `bootstrap`), you can just write the following code in `.global.css`:

```css
@import "~bootstrap/dist/css/bootstrap.css";
```


## Packaging

To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build) for dependencies.

Then,
```bash
$ yarn package-all
```

To package apps with options:

```bash
$ yarn package -- --[option]
```

## Further commands

To run the application without packaging run

```bash
$ yarn build
$ yarn start
```

To run End-to-End Test

```bash
$ yarn build
$ yarn test-e2e
```
