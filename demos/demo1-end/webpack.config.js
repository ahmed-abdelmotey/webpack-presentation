
module.exports={
  entry:'./entry.js',
  output:{
    path: __dirname + '/dist',
    publicPath: "/dist/",
    filename: 'bundle.js'
  },
  devtool:'source-map',
  // watch:true,
  module:{
    loaders:[
      {
        test: /\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]        
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]        
      },
      {
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }        
      },
      
    ]
  }
}