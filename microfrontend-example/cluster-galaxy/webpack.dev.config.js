const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		index: 'index.html',
	},
	entry: {
		index: './src/index.js',
		'cluster-galaxy': './src/cluster-galaxy/cluster-galaxy.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: 'http://localhost:3000/static/',
	},
	module:{
		rules: [
			{
				test: /\.hbs$/,
				use: 'handlebars-loader',
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|jpeg|png)$/,
				use: 'file-loader',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatters: ['**/*', path.join(__dirname, 'build/**/*')],
		}),
		new HTMLWebpackPlugin({
			template: 'src/index.hbs',
			filename: 'cluster-galaxy.html',
			title: 'Cluster Galaxy',
			description: 'Huge thingy',
		}),
		new ModuleFederationPlugin({
			name: 'Star',
			filename: 'star.js',
			exposes: {
				'./Star': './src/star/star.js', 
			}
		}),
		new ModuleFederationPlugin({
			name: 'ClusterGalaxy',
			filename: 'remote-cluster-galaxy.js',
			exposes: {
				'./ClusterGalaxy': './src/cluster-galaxy/cluster-galaxy.js', 
			}
		}),
	],
}