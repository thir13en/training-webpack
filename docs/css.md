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