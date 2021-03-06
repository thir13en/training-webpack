const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		index: 'multiverse.html',
		port: 9000,
		// Check this out, this redirects any root to your home
		historyApiFallback: {
			index: 'multiverse.html',
		},
	},
	experiments: {
		topLevelAwait: true,
	},
	entry: {
		multiverse: './src/multiverse.js', 
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: 'http://localhost:9000/',
	},
	module: {
		rules: [
			{
				test: /\.hbs$/,
				use: ['handlebars-loader'], exclude: /node_modules/
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							'@babel/plugin-proposal-class-properties',
							'transform-async-to-generator',
						],
					},
				},
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.hbs',
			filename: 'multiverse.html',
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatters: ['**/*', path.join(process.cwd(), 'build/**/*')],
		}),
		new ModuleFederationPlugin({
			name: 'Multiverse',
			remotes: {
				Galaxy: 'Galaxy@http://localhost:3001/static/remote-galaxy.js',
				ClusterGalaxy: 'ClusterGalaxy@http://localhost:3000/static/remote-cluster-galaxy.js',
			},
		}),
	],
}