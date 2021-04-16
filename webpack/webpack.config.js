var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin=require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: 'js/[name].js',
    path: __dirname + '/dist',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
	  {
	    test: /\.ejs$/,
		use: [
          {
            loader: 'ejs-loader',
            options: {
			  esModule: false
            }
          }
		]
	  },
	  {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'test',
      template: 'src/index.ejs',
      filename: 'index.html',
      showErrors: true,
	  hash: true,
      inject: 'body',
      chunks: ['main']
    }),
	new CopyWebpackPlugin(
	  {patterns:[{from:'src/res', to:'res'}]}
	)
  ]
};
