const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Import module federation plugin
const { ModuleFederationPlugin } = require('webpack').container;


module.exports = {
	entry: {
		universe: './src/universe.js',
		star: './src/star.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: 'http://localhost:3000',
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
			template: 'src/page-template.hbs',
			filename: 'universe.html',
			title: 'Universe Generator',
			description: 'Create a Universe',
			// These are the chunks specified in the entry object
			chunks: ['universe'],
		}),
		new HTMLWebpackPlugin({
			template: 'src/page-template.hbs',
			filename: 'star.html',
			title: 'Star Generator',
			description: 'Create a Start',
			// These are the chunks specified in the entry object
			chunks: ['star'],
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
		new ModuleFederationPlugin({
			name: 'ModuleFederationPluginExample',
			// contains all that this webpack bundle will export to the rest of the world
			filename: 'remoteEntry.js',
			exposes: {
				'./ModuleName': './Path/To/Mopdule/Module.js', 
			}
		}),
	],
}