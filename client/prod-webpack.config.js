const path = require("path");
const assign = require('object-assign');

const themeEntries = require('./themes.js').themeEntries;
const extractThemesPlugin = require('./themes.js').extractThemesPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    base: __dirname,
    dist: path.join(__dirname, "../static/mapstore/dist"),
    framework: path.join(__dirname, "MapStore2", "web", "client"),
    code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
};

module.exports = require('./MapStore2/buildConfig')(
    assign({
            'imiomap': [path.join(__dirname, "js", "app")]
        }
    ),
    themeEntries,
    paths,
    extractThemesPlugin,
    true,
    "/static/mapstore/dist/",
    '.imiomap'
);
