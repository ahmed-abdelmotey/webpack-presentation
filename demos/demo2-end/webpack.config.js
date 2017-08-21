const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpack = require('webpack');
module.exports = {
  entry: {
    home: './sass/home.scss',
    pages: './sass/pages.scss',
    bundle1: './js/page1',
    bundle2: './js/page2'
  },
  output:{
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: __dirname + '/dist/'    
  },
  module:{
    loaders:[
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { minimize: true }}, 'sass-loader']
        })
      }
    ]
  },
  cache: false,
  plugins: [
    new ExtractTextPlugin("/css/[name].min.css", {allChunks: true}),
    new BundleAnalyzerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    minChunks: function(module){
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
  ]
}