const path = require("path")

module.exports = {
    devServer: {
        port: 8080,
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                'src': path.resolve(__dirname, 'src'),
                'components': path.resolve(__dirname, 'src/components'),
                'api': path.resolve(__dirname, 'api'),
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
    },
}
