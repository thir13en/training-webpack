const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		universe: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
	},
	module: {
		rules: [
			{ test: '/\.hbs$/', use: ['handlebars-loader'] },
			{ test: '/\.js$/', exclude: /node_modules/, use: ['babel-loader'] },
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			// Here you can specify different folders that you want to clean up, apart from dist
			cleanOnceBeforeBuildPatters: [
				// remove all files in dist folder
				'**/*',
				// remove all files in build folder
				path.join(process.cwd(), 'build/**/*'),
			],
		})
	]
};
