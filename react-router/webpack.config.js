var path = require('path');

module.exports = {
	entry: {
		dev: 'react-error-overlay',
		vendor: [
			require.resolve('./polyfills'),
			'react',
			'react-dom',
			'react-router-dom'
		],
		app: ['react-dev-utils/webpackHotDevClient', paths.appIndexJs]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist'
	},
	module: {
		rules: [{
			test: /\.js$/,
			include: path.resolve(__dirname, 'src'),
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['env', {
							'targets': {
								'browsers': ["last 2 versions", "ie 9"]
							},
							"debug": false
						}]
					]
				}
			}
		}]
	}
}
