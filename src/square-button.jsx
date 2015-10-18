import React from 'react';

var SquareButton = React.createClass({

  render: function() {
    let self = this;
    let style = {
      backgroundColor: self.props.color.one || 'tomato',
      borderRadius: '10px',
      height: '40px',
      width: '40px'
    };
    return (
      <div style={style}>
        I am Square</div>
    );
  }
});

module.exports = SquareButton;
