const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: ['babel-polyfill', './src/resources/js/index.js'],
		front: './src/resources/js/front.js'
	},
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'js/[name]-bundle.js'
	},
	devServer: {
		contentBase: './docs'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
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
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader',
				]
			},
			{
				test: /\.(svg|gif|jpg|png|eot|woff|ttf)$/,
				loaders: [
					'url-loader'
				]
			}
		]
	}
}

