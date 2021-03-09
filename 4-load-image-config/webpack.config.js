const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),		
	},
	mode: 'none',
	module: {
		rules: [{
			test: /\.(jpg|jpeg|png)$/,
			use: ['file-loader']
		}],
	},
}