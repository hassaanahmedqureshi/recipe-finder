const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/recipe-finder/' : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.edamam.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // Remove /api from the request path
      },
    },
  },
}
)
