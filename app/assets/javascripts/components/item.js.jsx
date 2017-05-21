var Item = React.createClass({
  propTypes: {
    id: React.PropTypes.node,
    title: React.PropTypes.node
  },
  render: function() {
    return (
      <li>
        <b>Id: {this.props.id}</b> Title: {this.props.title}
      </li>
    );
  }
});
