var Items = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },

  renderItems(items) {
    return (items.map((item) => { return this.renderItem(item) }));
  },

  renderItem(item) {
    return (<Item item={ item.item } key= { item.item.id } />);
  },

  render: function() {
    const items = this.props.items

    return (
      <div>
        <div>Items:</div>
        { this.renderItems(items) }
      </div>
    );
  }
});
