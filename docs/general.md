# General

With `webpack`, we only need to import a single `css` and `javascript` file that will be bundled with all our code, so we don't have to remember how to explicitly import all our different modules.

### Minimal setup
You can find a minimal config example in [here](../minimal-animal/README.md). We are running webpack with the default config setting via `npx webapck`.  
The latter command generates a new folder named `dist` with a JavaScript file named `main.js` as per default config. Now this is the only JS file we need to import in our `index.html`.

### Integrating third party libraries