const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './dist'),		
	},
	mode: 'production',
	// This takes care of reutilization of common dependencies
	optimization: {
		// We dont need code splitting here
		// splitChunks: {
		// 	chunks: 'all',
		// 	minSize: '2000',
		// },
	},
	module: {
		rules: [
			{
				test: /\.hbs$/,
				use: ['handlebars-loader'],
			},
			{
				test: /\.(s*)css$/,
				use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	plugins: [
		// Terser plugin included by default in production
		new HTMLWebpackPlugin({
			template: 'src/index.hbs',
			filename: 'universe.html',
			title: 'Universe Generator',
			description: 'Create a Universe',
			// There are the chunks specified in the entry object
		}),
		new MiniCSSExtractPlugin({ filename: '[name].[contenthash].css' }),
		new CleanWebpackPlugin({
			// Here you can specify different folders that you want to clean up, apart from dist
			cleanOnceBeforeBuildPatters: [
				// remove all files in dist folder
				'**/*',
				// remove all files in build folder
				path.join(process.cwd(), 'build/**/*'),
			],
		}),
	],
}