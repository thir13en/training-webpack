# General

At its core, `webpack` is a static **module bundler** for modern `JavaScript` applications. When `webpack` processes your application, it internally builds a `dependency graph` which maps every `module` your project needs and generates one or more `bundles`.
With `webpack`, we only need to import a single `css` and `javascript` file that will be bundled with all our code, so we don't have to remember how to explicitly import all our different modules.
tip

### The bare minimum: zero config
Webpack can be run without any configuration whatsoever, assuming a series of pre-requisites, webpack will be able to produce a bundle for us. This prerequisites are:
1. An npm project with a package.json
1. Installed dependencies `webpack` and `webpack-cli`.
```zsh
yarn add -D webpack webpack-cli
```
1. [Optional] `index.html` file with a `script` tag pointing to a `dist/main.js` bundle from our project root. (Browser only)
1. A `src` folder that contains an `index.js` file, which acts as an entry point.

You can find a minimal config example in [here](../minimal-animal/README.md).  
The latter command generates a new folder named `dist` with a JavaScript file named `main.js` as per default config. Now this is the only JS file we need to import in our `index.html`.

### Integrating third party libraries
Import them as plain ES& modules and with the babel transpiler, you bundle will be usable in old browsers.