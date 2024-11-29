const { merge } = require("webpack-merge")
const getCommonConfig = require("./webpack.common")

module.exports = () => {
  return merge(getCommonConfig(), {
    mode: "development",
    devtool: "eval-cheap-source-map",
    devServer: {
      host: "localhost",
      port: 5070,
      historyApiFallback: true,
      allowedHosts: "all",
    },
  })
}
