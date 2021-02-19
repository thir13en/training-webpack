# Asset Modules

Modules destinated to keep assets (images, fonts...)

There are 4 types of assets modules:

1. Asset/Resource: emits a file directly and exports the url to that file, used for large images or large font files
1. Asset/Inline: embeds the data directly into the code, good for SVG for example.
1. Asset: Combination of the previous, allow webpack to decide automatically (if 6kb< will be inline, resource otherwise), this can be configured
1. Asset/Source: good for plain text files that can be injected as a string of text directly into the JavaScript bundle.

### Asset/Inline
Generates a base 64 representation of your file and bakes it directly into your code:
```javascrìpt
module: {
	rules: [
		{
			test: /\.hbs$/,
			use: ['handlebars-loader'],
		},
		{
			test: /\.(s*)css$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		},
		{
			test: /\.png$/,
			type: 'asset/resource', // default, also can be 'asset/inline' / 'asset/source'
			use: ['file-loader'],
		},
	],
},
```
Use asset inline when you have many many tiny files that would trigger many HTTP request.

### General Asset type
Webpack automatically choose from inline or resource based on the size of the file.
```javascrìpt
module: {
	rules: [
		{
			test: /\.hbs$/,
			use: ['handlebars-loader'],
		},
		{
			test: /\.(s*)css$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		},
		{
			test: /\.png$/,
			type: 'asset', // decide dynamically based on the size of the asset
			parser: {
				dataUrlCondition: {
					maxSize: 3 * 1024, // 3 kb
				},
			},
			use: ['file-loader'],
		},
	],
},
```

### Asset Source
Embeds the content of the file as is in the JavaScript bundle
```javascrìpt
module: {
	rules: [
		{
			test: /\.hbs$/,
			use: ['handlebars-loader'],
		},
		{
			test: /\.(s*)css$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		},
		{
			test: /\.txt$/,
			type: 'asset/source', // no need to specify loader here
		},
	],
},
```