# Configuration

We can create custom configurations by creating a `JS` file named **`webpack.config.js`**. In this file we need to use the old way of importing and exporting modules: `CommonJS`. You can find an example in [here](../minimal-config/webpack.config.js).

### Run the configuration
You can add a script to your `package.json` so it looks like this:
```json
"scripts": {
	"build": "webpack",
	"test": "test"
},
```
And then you'll be able to run it with `yarn build`.

### Output
#### PublicPath