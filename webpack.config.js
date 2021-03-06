const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const appDir = path.resolve(__dirname, './src');
const ENV = process.env.NODE_ENV || 'development'
const isDev = ENV === 'development'
const webpackConfigEntryPoints = {
  app: './index.ts'
}

const webpackConfigLoaders = [
  // Scripts
  {
    test: /\.ts$/,
    exclude: [/node_modules/],
    loader: 'ts-loader',
    include: [appDir]
  },
  // Styles
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    exclude: [/node_modules/],
  },

  // images/fonts
  {
    test: /\.(jpe?g|png|ttf|eot|ico|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    use: ['base64-inline-loader'],
    exclude: [/node_modules/]
  },


  // HTML
  {
    test: /\.html$/,
    loader: 'raw-loader',
    include: [appDir]
  }
]

const webpackConfigPlugins = [
  new HtmlWebpackPlugin({
    favicon: 'favicon.ico',
    template: isDev ? 'index.html' : 'build/index.html',
    inject: 'body',
    hash: true,
    env: ENV,
    host: '0.0.0.0',
    port: process.env.npm_package_config_port
  }),
]

module.exports = {
  mode: ENV,
  devtool: 'source-map',
  context: path.resolve(appDir),
  entry: webpackConfigEntryPoints,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.html']
  },
  watch: isDev ? true : false,
  module: {
    rules: webpackConfigLoaders
  },
  plugins: webpackConfigPlugins,
  devServer: {
    contentBase: 'src'
  }
}