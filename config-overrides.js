const {
  override,
  fixBabelImports,
  addWebpackAlias
} = require('customize-cra');

const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  addWebpackAlias({
    ['@App']: path.resolve(__dirname, './src/App'),
    ['@animations']: path.resolve(__dirname, './src/App/animations'),
    ['@components']: path.resolve(__dirname, './src/App/components'),
    ['@containers']: path.resolve(__dirname, './src/App/containers'),
    ['@hooks']: path.resolve(__dirname, './src/App/hooks'),
    ['@Models']: path.resolve(__dirname, './src/Models'),
    ['@Styles']: path.resolve(__dirname, './src/Styles')
  })
)
