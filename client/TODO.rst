
IMIO Map functionnalities

Common functionnalities
    * Load Map Configuration
    * Support EPSG:31370 and Lambert2008 (future)
    * Support WMS from SPW and Geonode
    * Support WMS GetFeatureInfo from SPW and geonode Layers (http proxy)

IMIO Map Urban Licence context
    * URBAN_LOAD_PARCELS : Action to be triggered by urban to zoom and show parcels. Given an array of CAPAKEYS
    * URBAN_SELECT_PARCELS : parcels can be SELECTED
    * URBAN_SHOW_LICENCES : Call Ajax on urban to get the list of licences for this parcel

IMIO Map Urban Full
    * URBAN_MAKE_PUBLIC_ENQUIRY : perform buffer on one or many selected parcels and fetch the results
    * Datagrid panel that shows current cadastral information on displayed parcels
    * URBANMAP_SEARCH_PARCELS : perform search in cadastral database given a set of parcels informations and display matching parcels on map and datagrid
    * URBANMAP_SEARCH_OWNERS : perform search in cadastral database given a set of users informations and display parcels owned by matching users on map and datagrid
    * URBANMAP_MODIFY_CONFIG : update current localstorage config