const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		universe: './src/universe.js',
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
			{ test: /\.hbs$/, use: ['handlebars-loader'], exclude: /node_modules/ },
			{ test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.hbs',
			filename: 'universe.html',
			title: 'Universe Generator',
			description: 'Create a Universe',
			chunks: ['universe'],
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatters: ['**/*', path.join(process.cwd(), 'build/**/*')],
		}),
	],
};
