const EslintWebpackPlugin=require("eslint-webpack-plugin");
const path=require('path');
const HtmlWebpackPlugin=require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const getStyleLoaders = (pre) => {
return ["style-loader",
    "css-loader",
    {//处理css兼容性问题
        loader: 'postcss-loader',
        //指定选项
        options: {
            postcssOptions: {//使用package.json设置兼容性程度
                plugins: ["postcss-preset-env"],
            },
        },
    },
    pre,
].filter(Boolean);
}

module.exports = {
    //配置入口文件
    entry: "./src/main.js",
    //配置出口文件
    output: {
        path: undefined,
        filename: "static/js/[name].js",
        chunkFilename: "static/js/[name].chunk.js",
        assetModuleFilename: "static.media/[hash:10][ext][query]",
    },
    //配置模块
    module: {
        rules: [
            //处理css
            {
                test: /\.css$/,
                use:getStyleLoaders(),
            },
            {
                test: /\.less$/,
                use:getStyleLoaders("less-loader"),
            },
            {
                test: /\.s[ac]ss$/,
                use:getStyleLoaders("sass-loader"),
            },
            {
                test: /\.styl$/,
                use:getStyleLoaders("stylus-loader"),
            },
            //图片处理
            {
                test: /\.(jpg?g|png|gif|webp|svg)/,
                type:"asset",
                parser:{
                    dataUrlCondition:{
                        maxSize:10*1024,
                    },
                },
            },
            //处理其他资源
            {
                test:/\.(woff2?|ttf)/,
                type:"asset/resource",
            },
            //处理js
            {
                test:/\.jsx?$/,
                include:path.resolve(__dirname,'../src'),
                loader:'babel-loader',
                options:{
                    cacheDirectory:true,
                    cacheCompression:false,
                    plugins:[
                        'react-refresh/babel',//激活js的HMR功能
                    ]
                },
            },
        ],
},
plugins: [
    new EslintWebpackPlugin({
        context:path.resolve(__dirname,'../src'),
        //限定处理类型
        exclude:"node_modules",
        //设置缓存
        cache:true,
        cacheLocation:path.resolve(__dirname,'../node_modules/.cache/.eslinkcache'),
    }),
    new HtmlWebpackPlugin({
        template:path.resolve(__dirname,"../public/index.html"),
    }),
    new ReactRefreshWebpackPlugin(),//HMR
],
    mode:"development",
    devtool:'cheap-module-source-map',
    optimization:{
        splitChunks:{
            chunks:"all",
        },
        runtimeChunk:{
            name:(entrypoint)=>`runtime~${entrypoint.name}.js`,
        },
    },
    //webpack解析模块加载选项
    resolve: {
        //自动补全文件拓展名
        extensions: [".jsx",".js",".json"],
    },
    //自动化配置
    devServer:{
        host:"localhost",
        port:'3000',
        open:true,
        hot:true,//实现热加载
        historyApiFallback:true,//解决前端路由刷新404
    },
};