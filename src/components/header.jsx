'use strict';
var React = require('react');
// var PropTypes = React.PropTypes;

var Header = React.createClass({

  render: function() {
    var self = this;
    var style = {
      height : self.props.headerHeight + 'px'
    };

    return (
      <div className="header" style={style}>Header</div>
    );
  }

});

module.exports = Header;
