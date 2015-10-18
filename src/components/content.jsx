var React = require('react');
var PropTypes = React.PropTypes;

import UpButton from './up-button.jsx';
import DownButton from './down-button.jsx';

var Content = React.createClass({

  render: function() {
    return (
      <div className="content">
        <UpButton />
        <DownButton />
      </div>
    );
  }

});

module.exports = Content;
