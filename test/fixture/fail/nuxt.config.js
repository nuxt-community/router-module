const { resolve } = require('path')

module.exports = {
  srcDir: __dirname,
  dev: false,
  modules: [resolve(__dirname, '../../../')]
}
