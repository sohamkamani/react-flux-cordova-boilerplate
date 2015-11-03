'use strict';
var React = require('react');

var SquareBox = React.createClass({

  render: function() {
    var style = {
      border : '1px solid black'
    };
    return (
      <div style={style}>
        {this.props.text}
      </div>
    );
  }

});

module.exports = SquareBox;
