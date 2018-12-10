
const React = require('react');
const {connect} = require('react-redux');
const {createSelector} = require('reselect');
const {bindActionCreators} = require('redux');
const {get} = require('lodash');

const {lifecycle} = require('recompose');


const {getDockSize} = require('../../../MapStore2/web/client/selectors/featuregrid');

const EMPTY_ARR = [];

const {sizeChange, setShowCurrentFilter} = require('../../../MapStore2/web/client/actions/featuregrid');
const ContainerDimensions = require('react-container-dimensions').default;
const {mapLayoutValuesSelector} = require('../../../MapStore2/web/client/selectors/maplayout');

const ReactTable = require("react-table").default;

require('react-table/react-table.css');

const Dock = connect(createSelector(
    getDockSize,
    state => mapLayoutValuesSelector(state, {transform: true}),
    (size, dockStyle) => ({
        size,
        dockStyle
    })
)
)(require('react-dock').default);

const FeatureDock = (props = {

    select: EMPTY_ARR
}) => {
    const dockProps = {
        dimMode: "none",
        defaultSize: 0.1,
        fluid: true,
        isVisible: true, //props.open,
        maxDockSize: 0.7,
        minDockSize: 0.1,
        position: "bottom",
        setDockSize: () => {},
        zIndex: 1030
    };
    const data = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      }];
    
      const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
      }];

    return (
        <Dock {...dockProps} onSizeChange={size => { props.onSizeChange(size, dockProps); }}>

         <ReactTable
            
            data={data}
            columns={columns}
          />
    </Dock>);
};
const selector = createSelector(
    state => get(state, "featuregrid.open"),
    state => get(state, 'featuregrid.features') || EMPTY_ARR,
  
    (open, features = EMPTY_ARR) => ({
        open,
        features
    })
);
const EditorPlugin = connect(selector,
    (dispatch) => ({
        onMount: bindActionCreators(setShowCurrentFilter, dispatch),
        onSizeChange: (...params) => dispatch(sizeChange(...params))
    })
)(FeatureDock);



module.exports = {
     CadasterViewerPlugin: EditorPlugin
 };
