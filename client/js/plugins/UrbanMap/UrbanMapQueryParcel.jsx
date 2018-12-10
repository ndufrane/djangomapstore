const React = require('react');
const PropTypes = require('prop-types');
const {connect} = require('react-redux');

const assign = require('object-assign');

const {Button, Glyphicon, Tooltip} = require('react-bootstrap');

const {toggleControl} = require('../../../MapStore2/web/client/actions/controls');
const OverlayTrigger = require('../../../MapStore2/web/client/components/misc/OverlayTrigger');

class UrbanMapQueryParcelButton extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        glyphicon: PropTypes.string,
        text: PropTypes.string,
        btnSize: PropTypes.oneOf(['large', 'small', 'xsmall']),
        className: PropTypes.string,
        help: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        tooltip: PropTypes.element,
        tooltipPlace: PropTypes.string,
        bsStyle: PropTypes.string,
        toggleSelectParcelTool: PropTypes.func
    };

    static defaultProps = {
        id: "mapstore-zoom",
        className: "square-button",
        glyphicon: "1-ruler",
        btnSize: 'xsmall',
        tooltipPlace: "left",
        step: 1,
        currentZoom: 3,
        minZoom: 0,
        maxZoom: 28,
        toggleSelectParcelTool: () => {},
        bsStyle: "default",
        style: {}
    };

    render() {
        return this.addTooltip(
            <Button
                id={this.props.id}
                style={this.props.style}
                onClick={this.props.toggleSelectParcelTool}
                className={this.props.className}
                bsStyle={this.props.active ? "success" : "primary"}
                >
                {this.props.glyphicon ? <Glyphicon glyph={this.props.glyphicon}/> : null}
                {this.props.glyphicon && this.props.text ? "\u00A0" : null}
                {this.props.text}
                {this.props.help}
            </Button>
        );
    }

    addTooltip = (btn) => {
        if (!this.props.tooltip) {
            return btn;
        }
        let tooltip = <Tooltip id="locate-tooltip">{this.props.tooltip}</Tooltip>;
        return (
            <OverlayTrigger placement={this.props.tooltipPlace} key={"overlay-trigger." + this.props.id} overlay={tooltip}>
                {btn}
            </OverlayTrigger>
        );
    };
}

const UrbanMapQueryParcelPlugin = connect((state) => {
    return {
        active: state && state.controls && state.controls.selectparcel && state.controls.selectparcel.enabled
    };
}, {
    toggleSelectParcelTool : toggleControl.bind(null, 'selectparcel', null)
})(UrbanMapQueryParcelButton);

module.exports = {
    UrbanMapQueryParcelPlugin: assign(UrbanMapQueryParcelPlugin, {
        Toolbar: {
            name: "SelectParcel",
            tooltip: "urbanmap.SelectParcel",
            tool: true,
            priority: 1,
            position: 9,
            exclusive: true,
            hide: false
        }
    }),
    reducers: {
    }
};