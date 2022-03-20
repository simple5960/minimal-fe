// webpack.config.js
const path = require('path');
const baseURL = 'http://127.0.0.1';
module.exports = {
  devServer: {
    port: 9000,
    host: "localhost",
    https: false,
    proxy: {
      '/first': {
        target: `${baseURL}:5001`,
        changOrigin: true
      },
      "['/second', '/second/test']": {
        target: `${baseURL}:5002`,
        changOrigin: true,
      },
      "['/third', '/third/aa']" : {
        target: `${baseURL}:5003`,
        changOrigin: true
      },
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
