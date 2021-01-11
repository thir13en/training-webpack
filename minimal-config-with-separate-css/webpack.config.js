const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, './dist'),		
	},
	mode: 'none',
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
		new HTMLWebpackPlugin({
			title: 'Minimal Config',
			filename: 'subfolder/custom-index-name.html',
			meta: {
				description: 'Some description',
			}
		}),
		new MiniCSSExtractPlugin({ filename: 'styles.[contenthash].css' }),
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