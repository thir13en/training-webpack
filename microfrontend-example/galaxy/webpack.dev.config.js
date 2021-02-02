const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		galaxy: './src/galaxy.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
	},
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
			filename: 'galaxy.html',
			title: 'Galaxy Generator',
			description: 'Create a galaxy',
			chunks: ['galaxy'],
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatters: ['**/*', path.join(process.cwd(), 'build/**/*')],
		}),
	],
};
