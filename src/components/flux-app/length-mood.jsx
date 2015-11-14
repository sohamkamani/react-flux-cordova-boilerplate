'use strict';

var React = require('react');

let cap256 = (n) => {
  return n > 255 ? 255 : n;
};

let colorFromSize = (size) => {
  let factor = 1;
  let r = cap256((size + 40)/factor),
    gb = cap256(size/factor);

  return `rgb(${r},${gb},${gb})`;
};

var LengthMood = React.createClass({

  render: function() {
    let self = this;
    let color = colorFromSize(self.props.wordLength);
    let style = {
      width : '50px',
      height : '50px',
      backgroundColor : color
    };
    return (
      <div style={style}/>
    );
  }

});

module.exports = LengthMood;
