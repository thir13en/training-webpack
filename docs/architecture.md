# Architecture

### Creating a MPA

You can define an arbitrary number of `entrypoints` in your config, like in [minimal-config-dev-server](../minimal-config-dev-server/webpack.dev.config.js). Pay attention to the `css` and `js` filename configs.  
Would you like to create several `html` files for each component, you'd need to configure several times the `HTMLWebpackPlugin`, you can find an example for this in the `config` pointer above.

### Code Splitting
By default, `webpack` includes dependencies in all the bundles that request them. WE can tweak that with the `optimization` field of our configuration as shown in [here](../minimal-conf-code-splitting/webpack.prod.conf.js):
```javascript
optimization: {
	splitChuncks: {
		chunks: 'all',
	}
},
```
This is also good because keep common dependencies in different bundles that can be cached by our user's browsers.  
In addition, dependencies will only be included when needed (imported in a file of one of the bundles).

### Code Splitting Custom Options
By default, `Webpack` only extracts common dependencies when they exceed more than **30kb**, but won't do with libraries smaller than that, such as `React`. You can configure this in the **splitChunks** option of your conf:
```javascript
optimization: {
	splitChuncks: {
		chunks: 'all',
		// size in bytes default to 30000
		minSize: '2000',
	}
},
```