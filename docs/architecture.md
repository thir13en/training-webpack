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