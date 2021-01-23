# Node

You can find an example on how to configure Webpack with Node [here](../minimal-conf-node-express/README.md).

### Load static files from node
You first should tell `node` to treat one path, for example `/static/`, as a static file. You can do so with the following config:
```javascript
app.use('/static', express.static(path.resolve(__dirname, '../dist')));
```
Then, you can tell webpack to append `/static` path to your folder with the `publicPath` config option:
```javascript
output: {
	filename: '[name].[contenthash].js',
	path: path.resolve(__dirname, './dist'),
	publicPath: '/static/',
},
```
