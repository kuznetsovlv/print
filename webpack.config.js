"use strict";

const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || "development";
const DEV = NODE_ENV === "development";


const plugins = [
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		NODE_ENV: JSON.stringify(NODE_ENV),
		DEV: JSON.stringify(DEV)
	})
];

const productPlugins = [
	new webpack.optimize.UglifyJsPlugin({
		compress: { warnings: false, drop_console: true, unsafe: true }
	}),
	// new webpack.optimize.OccurenceOrderPlugin(),
	// new webpack.ProvidePlugin({
	// 	Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
	// 	'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
	// })
];

function getExtentions () {
	const extentions = ['', '.js'];

	if (DEV)
		extentions.push('_dev.js');

	return extentions;
}

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: DEV ? 'index_dev' : 'index',

	noInfo: true,

	target: 'node',

	output: {filename: 'index.js', path: path.resolve(__dirname, DEV ? 'test' : 'dist'), library: 'print', libraryTarget: 'umd'},

	watch: DEV,

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: DEV ? "cheap-source-map" : null,

	plugins: DEV ? plugins : plugins.concat(productPlugins),
	// plugins: plugins,

	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: getExtentions()
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js']
	},

	module: {
		loaders: [{
			exclude: /node_modules/,
			test: /\.js$/,
			loader: 'babel'
		}]
	}
}
