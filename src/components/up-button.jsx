var React = require('react');
var PropTypes = React.PropTypes;

var UpButton = React.createClass({

  handleClick : function(){
    emitter.emit('up');
  },

  render: function() {
    return (
      <div onClick={this.handleClick} className="up-down-button">UP</div>
    );
  }

});

module.exports = UpButton;
