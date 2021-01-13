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
This option specifies the `public URL` of the `output` directory when referenced in a browser. A relative URL is resolved relative to the HTML page (or `<base>` tag). Server-relative URLs, protocol-relative URLs or absolute URLs are also possible and sometimes required, i. e. when hosting assets on a CDN.
It defaults to `auto`, which points to the current folder.  
This is specially important when serving static files from a `cdn`, for example:
```json
{
	entry: path.join(__dirname, indexPath),
	output: {
		filename: '[name].[contenthash].bundle.js',
		publicPath: 'https://somecdn.com/',
	}
}
```

### Mode
Available since `Webpack 4`, aims at performance optimization for `production` and developer experience for `development`.  
**Production mode** enables a long list of built in plugins, including `terser` plugin.