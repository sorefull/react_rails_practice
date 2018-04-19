var NewItem = React.createClass({
  propTypes: {
    csrf_token: React.PropTypes.string.isRequired
  },

  render: function() {
    const csrf_token = this.props.csrf_token

    return (
      <form action="/items" method="post">
        <input type="hidden" name="authenticity_token" value={csrf_token} />
        <input type="text" name="item[title]" placeholder="Put your junk here..." />
        <button type="submit">Squirt</button>
      </form>
    );
  }
});
