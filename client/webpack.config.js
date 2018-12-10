const path = require("path");
const assign = require("object-assign");
const themeEntries = require('./themes.js').themeEntries;
const extractThemesPlugin = require('./themes.js').extractThemesPlugin;



module.exports = assign({}, require('./MapStore2/buildConfig')(
    {
        'imiomap': [path.join(__dirname, "js", "app")]
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    extractThemesPlugin,
    false,
    "http://localhost:8081/dist/",
    '.imiomap'
), {
    devServer: {
        
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
});