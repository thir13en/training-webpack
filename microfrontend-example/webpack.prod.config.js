const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		universe: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
	},
	mode: 'production',
	module: {
		rules: [
			{ test: '/\.hbs$/', use: ['handlebars-loader'], },
			{ test: '/\.js$/', exclude: /node_modules/, use: ['babel-loader'], },
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'src/index.hbs',
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
