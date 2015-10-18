import React from 'react';
import SquareButton from './square-button.jsx';

var App = React.createClass({

  render: function() {
    let squareButtons = [1,2,3].map(function(n, i){
      return (
        <SquareButton key={i} color={{one : 'red'}} />
      );
    });
    return (
      <div>
        <span>Working</span>
        {squareButtons}
      </div>
    )
  }

});

module.exports = App;
