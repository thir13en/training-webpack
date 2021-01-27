# Module Federation

Useful when dealing with an ecosystem of multiple applications.  
Module Federation allows one application to load modules from another application at runtime.

### How to
You can start by creating two separate `Webpack` applications, both of them with different ports. It is important to note that `Module Federation` is only available from `webpack 5` and on. To make sure you can apply run:
```
yarn add webpack@latest webpack-cli@latest
```

### Set up
First import `webpack module federation plugin`:
```javascript
// Import module federation plugin
const { ModuleFederationPlugin } = require('webpack').container;
```
Confugure the plugin, adding it to the list of plugins:
```javascript
new ModuleFederationPlugin({
	name: 'ModuleFederationPluginExample',
	// contains all that this webpack bundle will export to the rest of the world
	filename: 'remoteEntry.js',
	exposes: {
		'./ModuleName': './Path/To/Mopdule/Module.js', 
	}
}),
```
Note that now `webpack` needs to know the `public path` from where the app will be available, in order to serve the files:
```javascript

```