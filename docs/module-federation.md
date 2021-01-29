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
		'./RemoteAppModule': './Path/To/Mopdule/Module.js', 
	}
}),
```
Note that now `webpack` needs to know the `public path` from where the app will be available, in order to serve the files, we do this in the output object:
```javascript
output: {
	filename: '[name].js',
	path: path.resolve(__dirname, './dist'),
	// notice that this shall be the url in which the application is being served
	publicPath: 'http://localhost:3000',
},
```
This tells Webpack where to serve the dependencies that will be made available to the consumers of our federated module.  
Now, in the consumer modules, you'd need to state which remote modules will be consumed:
```javascript
new ModuleFederationPlugin({
	name: 'ModuleFederationConsumerPluginExample',
	remotes: {
		'RemoteAppName': 'RemoteAppName@http://localhost:3000/remoteEntry.js',
	},
}),
```
Last but not least, we need to consume explicitly the modules in our client app:
```javascript
import('RemoteAppName/RemoteAppModule')
	.then(RemoteAppModule => {
		const RemoteAppModule = RemoteAppModule.default;
		const remoteAppModule = new RemoteAppModule();

		remoteAppModule.render();
		remoteAppModule.doMagic();
		// You did it!
	});
```
This loaded module is not bundled in the initial build, it is loaded dynamically at runtime!!

### Module are consumed at Runtime!
If you perform any change in some of the federated modules, are the consumer will benefit from the updates, since the modules are consumed at runtime.

### Microfrontends, the new paradigm