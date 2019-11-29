const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

console.log(src)
module.exports = {
  mode: 'development', //devel モードで実行します
  entry: path.resolve(src, 'js/main.js'), //ビルドを実行するファイルパス
  output: {
    filename: 'bundle.js', //育成されるファイル名
    path: dist // 育成先のディレクトリ
  },
  resolve: {
    modules: ['node_modules'], //import 文のパス指定にnode_modulesを省略できるようにします
    extensions: ['.js', 'jsx'] //.js またはjsxの拡張子を省略できるようにします
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/, // ルールを適用するファイルの正規表現
      exclude: /node_modules/, // node_modules以下のファイルには適応しないようにする
      loader: 'babel-loader' //使用するloader
    }]
  },
  devServer: {
    contentBase: dist, //開発サーバを立ち上げる参照ディレクトリ
    hot: true, //hot-reloadを有効にします
    port: 3000 //サーバを立ち上げるポート番号
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //hot-reloadを有効にするプラグイン
    new HtmlWebpackPlugin() //HtmlWebpackPlugin プラグインを追加
  ]

}