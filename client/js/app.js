/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

require('./proj/31370.js');
const proj4 = require('proj4').default;
ol.proj.setProj4(proj4);
ol.proj.get('EPSG:31370').setExtent([0, 0, 300000, 300000]);

var axios = require('../MapStore2/web/client/libs/ajax');
const ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');
ConfigUtils.setConfigProp('themePrefix', 'imiomap');

const getScriptPath = function() {
    const scriptEl = document.getElementById('imiomap');
    return scriptEl && scriptEl.src && scriptEl.src.substring(0, scriptEl.src.lastIndexOf('/')) || 'https://dev.mapstore2.geo-solutions.it/mapstore/dist';
};

const loadMapConfig = function(configName) {
    return axios.get(configName).then((response) => {
        if (typeof response.data === 'object') {
                return response.data;
        } else {
            try {
                JSON.parse(response.data);
            } catch (e) {
                console.log('Configuration file broken (' + configName + '): ' + e.message);
            }
        }
    }).catch((e) => {
        console.log("Error while loading mapconfig");
    });  
}

const MapStore2 = require('../MapStore2/web/client/jsapi/MapStore2').withPlugins(require('./plugins'), {
    theme: {
        path: getScriptPath() + '/themes'
    },
	translationsPath: ["./MapStore2/web/client/translations","./js/translations"],
    noLocalConfig: true,
    translations: getScriptPath() + '/../MapStore2/web/client/translations'
});

window.MapStore2 = MapStore2;
window.loadMapConfig = loadMapConfig;

