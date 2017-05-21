var Items = React.createClass({
  getInitialState: function() {
    return { items: [], owner: 'Oleg' };
  },
  componentDidMount: function() {
    this.getDataFromApi();
  },
  getDataFromApi: function() {
    var self = this;
    $.ajax({
      url: '/api/items',
      success: function(data) {
        self.setState({ items: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  },
  render: function() {
    var items = [];
    this.state.items.forEach(function(item) {
      items.push(<Item id={item.id} title={item.title}/>);
    }.bind(this));
    return (
      <div>
        <div>Hy {this.state.owner}!</div>
        <div>Here is some stuff for you!</div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
});
