
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    //完整的配置内容
    //https://blog.csdn.net/a123456234/article/details/140966496

    // 基础路径
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // 输出目录
    outputDir: 'dist',

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer = [
                new TerserPlugin({
                    terserOptions: {
                        compress: false,
                        mangle: false,
                        ecma: 6,
                        warnings: false,
                        parse: {},
                        output: {
                            comments: false
                        }
                    },
                    extractComments: false
                })
            ];
        }
    },

    // devServer 代理设置

    devServer: {
        // host: '0.0.0.0',
        // port: 8080,
        // // https: false,
        // open: true,
        proxy: {
            // 配置跨域处理 可以设置你想要代理的接口
            '/api': {
                target: 'http://10.192.19.122:8096',
                changeOrigin: true
                // pathRewrite: {
                //     '^/api': ''
                // }
            }
        }
    }

};