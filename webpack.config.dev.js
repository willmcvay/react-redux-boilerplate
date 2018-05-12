const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	stats: 'errors-only',
	output: {
		filename: '[name].js',
		path: `${__dirname}/dist`
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'App',
			template: 'public/index.html'
		})
	],
	serve: {
		content: [ __dirname ]
	}
}
