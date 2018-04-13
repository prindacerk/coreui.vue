const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackCleanPlugin = require('webpack-clean-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CheckerPlugin = require("awesome-typescript-loader").CheckerPlugin;

module.exports = (env) => {
	const bundleOutputDir = "./wwwroot";
	const isDevBuild = !(env && env.prod);
	const extractSass = new ExtractTextPlugin(isDevBuild ? "css/[name].css" : "css/[name].min.css");

	return [
		{
			mode: isDevBuild ? "development" : "production",
			stats: { modules: false },
			context: __dirname,
			resolve: { extensions: [".js", ".ts"] },
			entry: {
				site: [
					/*scss|css*/
					"./src/assets/styles/site.scss",
					/*ts|js*/
					"./src/boot.ts"
				],
			},
			module: {
				rules: [
					{
						test: /\.vue\.html$/,
						include: /src/,
						loader: "vue-loader",
						options: { loaders: { js: "awesome-typescript-loader?silent=true" } },
					},
					{
						test: /\.ts$/,
						include: /src/,
						use: "awesome-typescript-loader?silent=true",
					},
					{
						test: /\.(scss|css)(\?|$)/,
						use: extractSass.extract({
							use: [
								{ loader: "css-loader", options: { minimize: !isDevBuild } },
								{ loader: "sass-loader", options: { minimize: !isDevBuild } }
							],
							fallback: "style-loader"
						}),
					},
					{
						test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)(\?|$)/,
						use: [
							{ loader: "url-loader", options: { limit: 100000, name: "[hash].[ext]", outputPath: "images/", publicPath: "" } }
						],
					},
				]
			},
			output: {
				path: path.join(__dirname, bundleOutputDir),
				filename: isDevBuild ? "js/[name].js" : "js/[name].min.js",
				publicPath: "js/"
			},
			plugins: [
				new CheckerPlugin(),
				extractSass,
				new WebpackCleanPlugin({
					on: "emit",
					path: [
						path.join(__dirname, "wwwroot", "css"),
						path.join(__dirname, "wwwroot", "images"),
						path.join(__dirname, "wwwroot", "js"),
					]
				}),
				new webpack.DefinePlugin({
					'process.env': {
						NODE_ENV: JSON.stringify(isDevBuild ? "development" : "production")
					}
				}),
				new webpack.DllReferencePlugin({
					context: __dirname,
					manifest: require("./wwwroot/vendor/vendor-manifest.json")
				}),
				// copy static assets
				new CopyWebpackPlugin([
					{
						from: path.resolve(__dirname, "src/assets/images"),
						to: "images",
						ignore: [".*"]
					}
				])
			].concat(isDevBuild
				? [
					// Plugins that apply in development builds only
					new webpack.SourceMapDevToolPlugin({
						filename: "[file].map", // Remove this line if you prefer inline source maps
						moduleFilenameTemplate:
							path.relative(bundleOutputDir,
								"[resourcePath]") // Point sourcemap entries to the original file locations on disk
					}),
				]
				: [
					// Plugins that apply in production builds only
					new UglifyJsPlugin(),
				])
		}
	];
};