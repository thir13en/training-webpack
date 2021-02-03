# CSS

It is a good practise to extract your CSS in a separate bundle, to allow parelelization and to make production bundles more optimal. To do so, you can use the `MiniCSSExtractPlugin`. With this one we can also replace the `'style-loader'` of our loaders by `MiniCSSExtractPlugin.loader`.

```javascript
{
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(s*)css$/,
				use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new TerserPlugin(),
		new MiniCSSExtractPlugin({ filename: 'styles.css' }),
	],
}
```
It is interesting to note that, as happens with the JS bundle that `Webpack` emits as output, `MiniCSSExtractPlugin` extracts all our `css` files in a single one.

### Development
In development we don't need to minify, so the following config would work:
```javascript
{
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new TerserPlugin(),
		new MiniCSSExtractPlugin({ filename: 'styles.css' }),
	],
}
```

### Needed dependencies
```
yarn add -D style-loader css-loader sass-loader node-sass
```