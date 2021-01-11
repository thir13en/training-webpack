# Plugins

Plugins are `JavaScript` libraries that can do everything that `loaders` can't do. Minifying and creating a different bundle structure can be some of the plugins responsabilities.  

### Minify
You can minify files with `terser` plugin.

### Clean dist folder on every generation
You can do so with the `CleanWebpackPlugin`. You can check in the config of [minimal-config-with-separate-css](minimal-config-with-separate-css/webpack.config.js)

### HTML Webpack Plugin
In this case, we will generate amn HTML file together with our bundle, so we can desist on indicating a path for our deploy in our `output` config, given that we will have the html pointing to the bundles contained in the very same `dist` directory.  
With this plugin you **don't** need the `html` file living in your src directory, you just need to configure the plugin to produce the king of `index.html` you desire.  
Here is a configuration example for this plugin:
```javascript
new HTMLWebpackPlugin({
	title: 'Minimal Config',
	filename: 'subfolder/custom-index-name.html',
	meta: {
		description: 'Some description',
	}
}),
```