var Item = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },

  render: function() {
    const item = this.props.item
    const deleteUrl = `/items/${item.id}`

    return (
      <div>
        <div>Title: { item.title }</div>
        <div>Created At: { item.created_at }</div>
        <a href={ deleteUrl } data-method="delete">Delete</a>
      </div>
    );
  }
});
