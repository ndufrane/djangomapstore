/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    plugins: {
            DetailsPlugin: require('../MapStore2/web/client/plugins/Details'),
            DetailsPlugin: require('../MapStore2/web/client/plugins/Map'),
            PrintPlugin: require('../MapStore2/web/client/plugins/Print'),
            IdentifyPlugin: require('../MapStore2/web/client/plugins/Identify'),
            TOCPlugin: require('../MapStore2/web/client/plugins/TOC'),
            BackgroundSwitcherPlugin: require('../MapStore2/web/client/plugins/BackgroundSwitcher'),
            MeasurePlugin: require('../MapStore2/web/client/plugins/Measure'),
            MapPlugin: require('../MapStore2/web/client/plugins/Map'),
            ToolbarPlugin: require('../MapStore2/web/client/plugins/Toolbar'),
            DrawerMenuPlugin: require('../MapStore2/web/client/plugins/DrawerMenu'),
            ShapeFilePlugin: require('../MapStore2/web/client/plugins/ShapeFile'),
            SnapshotPlugin: require('../MapStore2/web/client/plugins/Snapshot'),
            SettingsPlugin: require('../MapStore2/web/client/plugins/Settings'),
            ExpanderPlugin: require('../MapStore2/web/client/plugins/Expander'),
            SearchPlugin: require('../MapStore2/web/client/plugins/Search'),
            ScaleBoxPlugin: require('../MapStore2/web/client/plugins/ScaleBox'),
            LocatePlugin: require('../MapStore2/web/client/plugins/Locate'),
            ZoomInPlugin: require('../MapStore2/web/client/plugins/ZoomIn'),
            ZoomOutPlugin: require('../MapStore2/web/client/plugins/ZoomOut'),
            ZoomAllPlugin: require('../MapStore2/web/client/plugins/ZoomAll'),
            FullScreenPlugin: require('../MapStore2/web/client/plugins/FullScreen'),
            MapLoadingPlugin: require('../MapStore2/web/client/plugins/MapLoading'),
            HelpPlugin: require('../MapStore2/web/client/plugins/Help'),
            HelpLinkPlugin: require('../MapStore2/web/client/plugins/HelpLink'),
            OmniBarPlugin: require('../MapStore2/web/client/plugins/OmniBar'),
            GridContainerPlugin: require('../MapStore2/web/client/plugins/GridContainer'),
            BurgerMenuPlugin: require('../MapStore2/web/client/plugins/BurgerMenu'),
            UndoPlugin: require('../MapStore2/web/client/plugins/History'),
            RedoPlugin: require('../MapStore2/web/client/plugins/History'),
            ContentTabs: require('../MapStore2/web/client/plugins/ContentTabs'),
            QueryPanelPlugin: require('../MapStore2/web/client/plugins/QueryPanel'),
            WFSDownloadPlugin: require('../MapStore2/web/client/plugins/WFSDownload'),
            TutorialPlugin: require('../MapStore2/web/client/plugins/Tutorial'),
            GoFull: require('../MapStore2/web/client/plugins/GoFull'),
            BackgroundSelectorPlugin: require('../MapStore2/web/client/plugins/BackgroundSelector'),
            SearchServicesConfigPlugin: require('../MapStore2/web/client/plugins/SearchServicesConfig'),
            VersionPlugin: require('../MapStore2/web/client/plugins/Version'),
            //FeatureEditorPlugin: require('../MapStore2/web/client/plugins/FeatureEditor'),
            AutoMapUpdatePlugin: require('../MapStore2/web/client/plugins/AutoMapUpdate'),
            MapFooterPlugin: require('../MapStore2/web/client/plugins/MapFooter'),
            AnnotationsPlugin: require('../MapStore2/web/client/plugins/Annotations'),
            TOCItemsSettingsPlugin: require('../MapStore2/web/client/plugins/TOCItemsSettings'),
            FloatingLegendPlugin: require('../MapStore2/web/client/plugins/FloatingLegend'),
            ThematicLayerPlugin: require('../MapStore2/web/client/plugins/ThematicLayer'),
            UrbanMapPlugin: require("./plugins/Urban/UrbanMap"),
            CadasterViewerPlugin: require("./plugins/Urban/CadasterViewer"),
            UrbanMapQueryParcelPlugin: require("./plugins/UrbanMap/UrbanMapQueryParcel")
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('../MapStore2/web/client/components/data/identify/SwipeHeader')
    }
};
