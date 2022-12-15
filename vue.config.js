const { defineConfig } = require("@vue/cli-service");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  // webpack-merge将合并其中代码
  productionSourceMap: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: "./dist", // 作用的文件夹(打包好的文件夹)
          release: process.env.RELEASE_VERSION, // 版本号
          // ignoreFile: ".sentryclirc",
          org: "myblog-pn",
          project: "javascript-vue",
          url: "https://sentry.io/",
          authToken:
            "a00e4822375d4a17b8bc21925948d5d399fc0325725645559ee697be2f645cb9",
          ignore: ["node_modules", "vue.config.js"],
          urlPrefix: "~/", // 线上项目的文件夹名
          cleanArtifacts: true,
        })
      );
    }
  },
};
