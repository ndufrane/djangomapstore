const React = require('react');
const PropTypes = require('prop-types');
const assign = require('object-assign');
const {createSelector} = require('reselect');
var {} = require('./actions');
const {connect} = require('react-redux');
const {Glyphicon} = require('react-bootstrap');
const {Modal, Button} = require('react-bootstrap');
const {Form, FormGroup, ControlLabel, FormControl} = require('react-bootstrap');
const {toggleControl, setControlProperty} = require("../../../MapStore2/web/client/actions/controls");
const Message = require('../../../MapStore2/web/client/plugins/locale/Message');


const {mapSelector} = require('../../../MapStore2/web/client/selectors/map');
const {layersSelector} = require('../../../MapStore2/web/client/selectors/layers');

const {getParsedUrl} = require('../../../MapStore2/web/client/utils/ConfigUtils');



const stateSelector = state => state;

const selector = createSelector(mapSelector, stateSelector, layersSelector, (map, state, layers) => ({
    active: (state.controls && state.controls.UrbanMap && state.controls.UrbanMap.enabled) || (state.controls.toolbar && state.controls.toolbar.active === "UrbanMap"),
    toolbarActive: state.controls.toolbar && state.controls.toolbar.active === "UrbanMap",
    currentZoomLvl: map && map.zoom
}));

class UrbanMap extends React.Component {
    static propTypes = {
        expanded: PropTypes.bool,
        layers: PropTypes.array,
        active: PropTypes.bool,
        toolbarActive: PropTypes.bool,
        onClose: PropTypes.func,
        onCloseToolBar: PropTypes.func
    };

    static defaultProps = {
      active: false
    };

    render() {
        if (this.props.active) {
            return (
                <Modal show={this.props.active} onHide={this.close} bsSize="small" aria-labelledby="contained-modal-title-sm">
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">
                      <Message msgId="urbanmap.save_or_load_title"/>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form inline>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>Name</ControlLabel>{' '}
                            <FormControl type="text" placeholder="Jane Doe" />
                        </FormGroup>{' '}
                        <FormGroup controlId="formInlineEmail">
                            <ControlLabel>Email</ControlLabel>{' '}
                            <FormControl type="email" placeholder="jane.doe@example.com" />
                        </FormGroup>{' '}
                        <Button type="submit">Send invitation</Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>
                      <Message msgId="urbanmap.close"/>
                    </Button>
                  </Modal.Footer>
                </Modal>
            );
        }
        return null;
    }

    close = () => {
        if (this.props.toolbarActive) {
            this.props.onCloseToolBar();
        } else {
            this.props.onClose();
        }
    };
}

const UrbanMapPlugin = connect(selector, {
    toggleControl: toggleControl.bind(null, 'UrbanMap', null),
    onClose: toggleControl.bind(null, 'UrbanMap', null),
    onCloseToolBar: setControlProperty.bind(null, 'toolbar', 'active', null)
})(UrbanMap);

module.exports = {
    UrbanMapPlugin: assign(UrbanMapPlugin, {
        
        Toolbar: {
            name: 'UrbanMap',
            position: 9,
            exclusive: true,
            panel: true,
            tooltip: "UrbanMap",
            wrap: false,
            title: 'UrbanMap',
            icon: <Glyphicon glyph="hdd"/>,
            hide: false,
            priority: 2
        },
        
        BurgerMenu: {
            name: 'UrbanMap',
            position: 6,
            text: <Message msgId="UrbanMap.save_or_load_title"/>,
            icon: <Glyphicon glyph="hdd"/>,
            action: toggleControl.bind(null, 'UrbanMap', null),
            priority: 2,
            doNotHide: true
        }
    }),
    reducers: {
        UrbanMap: require('./reducers')
    }
};