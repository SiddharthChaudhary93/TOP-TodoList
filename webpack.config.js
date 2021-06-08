const path = require('path');

module.exports = {
    mode : 'development',
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'main.js',
    },
    watchOptions:{
        aggregateTimeout:500,
        ignored:/node_modules/,
    }
}