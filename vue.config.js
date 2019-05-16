// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊

const webpack = require('webpack')
const path = require('path')
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings
module.exports = {
    // baseUrl  type:{string} default:'/'
    // 将部署应用程序的基本URL
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

    baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',

    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: true,

    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,

    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项

    devServer: {
        before(app) {
            app.get('/api/seller', function (req, res) {
                res.json({
                    errno: 0,
                    data: seller
                })
            })
            app.get('/api/goods', function (req, res) {
                res.json({
                    errno: 0,
                    data: goods
                })
            })
            app.get('/api/ratings', function (req, res) {
                res.json({
                    errno: 0,
                    data: ratings
                })
            })
        },

    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
