const WebpackBar = require("webpackbar");

module.exports = {
  lintOnSave: true,
  productionSourceMap: false, //打包时去掉map文件
  configureWebpack: {
    plugins: [new WebpackBar()],
  },
};
