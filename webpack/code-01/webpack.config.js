const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        // куда сохраняется файл
        path: path.resolve(__dirname, 'dist/js'),
        // как будет называться файл (типичное нащвание для сборок)
        filename: 'bundle.js',
    }
};