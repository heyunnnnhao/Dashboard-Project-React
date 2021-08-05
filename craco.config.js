module.exports = {
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
      plugin: require("craco-alias"),
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@src": "./src",
          "@pages":"./src/pages",
          "@css": "./src/style/css",
          "@api": "./src/api",
          "@assets": "./src/assets",
        }
      }
    }
  ]
}