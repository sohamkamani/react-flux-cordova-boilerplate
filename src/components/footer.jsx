var React = require('react');
var PropTypes = React.PropTypes;

var Footer = React.createClass({

  render: function() {
    let style = {
      height : this.props.headerHeight + 'px'
    };
    return (
      <div className="footer" style={style}>Footer</div>
    );
  }

});

module.exports = Footer;
