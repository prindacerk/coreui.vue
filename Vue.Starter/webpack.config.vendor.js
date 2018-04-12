const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackCleanPlugin = require('webpack-clean-plugin');

module.exports = (env) => {
	const isDevBuild = !(env && env.prod);
	const extractSass = new ExtractTextPlugin(isDevBuild ? "vendor/[name].css" : "vendor/[name].min.css");
	console.log(`Dev Environment:${isDevBuild}`);

	return [{
		stats: { modules: false },
		resolve: { extensions: [".js"] },
		entry: {
			vendor: [
				/*scss|css*/
				"./src/assets/styles/theme/external.scss",
				"./src/assets/styles/theme/style.scss",
				/*ts|js*/
				"bootstrap",
				"event-source-polyfill",
				"isomorphic-fetch",
				"jquery",
				"popper.js",
				"toastr",
				"vue",
				"vue-router",
			],
		},
		module: {
			rules: [
				{
					test: /\.(scss|css)(\?|$)/,
					use: extractSass.extract({
						use: [
							{ loader: "css-loader", options: { minimize: !isDevBuild } },
							{ loader: "sass-loader", options: { minimize: !isDevBuild } }
						],
						fallback: "style-loader",
					}),
				},
				{
					test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)(\?|$)/,
					use: [
						{ loader: "url-loader", options: { limit: 100000, name: "[hash].[ext]", outputPath: "vendor/", publicPath: "" } },
					],
				},
			]
		},
		output: {
			path: path.join(__dirname, "wwwroot"),
			publicPath: "",
			filename: isDevBuild ? "vendor/[name].js" : "vendor/[name].min.js",
			library: "[name]_[hash]"
		},
		plugins: [
			extractSass,
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				'window.jQuery': "jquery",
				Popper: ["popper.js", "default"],
			}), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify(isDevBuild ? "development" : "production")
				}
			}),
			new WebpackCleanPlugin({
				on: "emit",
				path: path.join(__dirname, "wwwroot", "vendor")
			}),
			new webpack.DllPlugin({
				path: path.join(__dirname, "wwwroot", "vendor", "[name]-manifest.json"),
				name: "[name]_[hash]"
			}),
		].concat(isDevBuild ? [] : [
			new webpack.optimize.UglifyJsPlugin()
		])
	}];
};
