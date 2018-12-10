

module.exports = (config, pluginsDef) => {
    const React = require('react');
    const ReactDOM = require('react-dom');
    const {connect} = require('react-redux');
    const LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');

    const startApp = () => {
        const ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');
        const {loadMaps} = require('../MapStore2/web/client/actions/maps');
        const {loadVersion} = require('../MapStore2/web/client/actions/version');
        const {versionSelector} = require('../MapStore2/web/client/selectors/version');
        const {loadAfterThemeSelector} = require('../MapStore2/web/client/selectors/config');
        const StandardApp = require('../MapStore2/web/client/components/app/StandardApp');

        const {pages, initialState, storeOpts, appEpics = {}} = config;

        const StandardRouter = connect((state) => ({
            locale: state.locale || {},
            pages,
            version: "no-version",
            loadAfterTheme: loadAfterThemeSelector(state)
        }))(require('../MapStore2/web/client/components/app/StandardRouter'));

        const {updateMapLayoutEpic} = require('../MapStore2/web/client/epics/maplayout');
        const {setSupportedLocales} = require('../MapStore2/web/client/epics/localconfig');

        const appStore = require('../MapStore2/web/client/stores/StandardStore').bind(null, initialState, {
            maptype: require('../MapStore2/web/client/reducers/maptype'),
            maps: require('../MapStore2/web/client/reducers/maps'),
            maplayout: require('../MapStore2/web/client/reducers/maplayout')
        }, {...appEpics, updateMapLayoutEpic, setSupportedLocales});

        const initialActions = [
            //() => loadMaps(ConfigUtils.getDefaults().geoStoreUrl, ConfigUtils.getDefaults().initialMapFilter || "*"),
            loadVersion
        ];

        const appConfig = {
            storeOpts,
            appEpics,
            appStore,
            pluginsDef,
            initialActions,
            appComponent: StandardRouter,
            printingEnabled: false
        };

        ReactDOM.render(
            <StandardApp {...appConfig}/>,
            document.getElementById('container')
        );
    };

    if (!global.Intl ) {
        // Ensure Intl is loaded, then call the given callback
        LocaleUtils.ensureIntl(startApp);
    } else {
        startApp();
    }
};
