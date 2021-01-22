const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),		
	},
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		index: 'index.html',
	},
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
		],
	},
	plugins: [
		// Terser plugin included by default in production
		new HTMLWebpackPlugin({
			template: 'src/index.hbs',
			filename: 'universe.html',
			title: 'Universe Generator',
			description: 'Create a Universe',
		}),
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