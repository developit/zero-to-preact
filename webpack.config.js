var path = require('path');

module.exports = {
	// entry file - starting point for the app
	entry: './src',

	// where to dump the output of a production build
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.jsx?/i,
				loader: 'babel-loader',
				options: {
					presets: [
						'es2015'
					],
					plugins: [
						['transform-react-jsx', { pragma: 'h' }]
					]
				}
			}
		]
	},
	
	// enable Source Maps
	devtool: 'source-map',

	devServer: {
		// serve up any static files from src/
		contentBase: path.join(__dirname, 'src'),

		// enable gzip compression:
		compress: true,

		// enable pushState() routing, as used by preact-router et al:
		historyApiFallback: true
	}
};
