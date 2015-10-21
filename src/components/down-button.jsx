var React = require('react');
var PropTypes = React.PropTypes;

var DownButton = React.createClass({

  handleClick : function(){
    emitter.emit('down');
  },

  render: function() {
    return (
      <div onClick={this.handleClick} className="up-down-button">down</div>
    );
  }

});

module.exports = DownButton;
