/*
 * @Descripttion: postcss.config.js
 */
module.exports = {
  plugins: {
    autoprefixer: {
      /* PostCSS plugin to parse CSS and add vendor prefixes to CSS rules */
      /* 配置文档链接：https://github.com/postcss/autoprefixer#options */
      overrideBrowserslist: [
        "last 2 versions", // 最后两个版本
      ],
    },
    "postcss-viewport-units": {
      /* vw兼容方案 */
      /* 配置文档链接：https://github.com/springuper/postcss-viewport-units#options */
    },
    "postcss-px-to-viewport": {
      /* 将px单位转换为视口单位的 (vw, vh, vmin, vmax) */
      /* 配置文档链接：https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md#%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0 */
      viewportWidth: 750,
      viewportUnit: "vw",
      unitPrecision: 3,
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // selectorBlackList: ['.vant'], // 以xxx开头
      include: [], // 包括
      exclude: [/(\/|\\)(node_modules)(\/|\\)/], // 排除
    },
    "postcss-write-svg": {
      /* 在retina屏绘制1px细线 */
      /* 配置文档链接：https://github.com/jonathantneal/postcss-write-svg#options */
    },
  },
};
