class Item extends React.Component {
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }

  static propTypes: {
    item: React.PropTypes.object,
    reloadStateHandler: React.PropTypes.func
  }

  deleteItem(itemId) {
    fetch(`/api/items/${ itemId }`, { method: 'DELETE' })
    .then((results) => { return results.json() })
    .then((data) => { this.props.reloadStateHandler(data) })
  }

  render() {
    const { item } = this.props

    return (
      <div>
        <div>Title: { item.title }</div>
        <div>Created At: { item.created_at }</div>
        <a href='javascript:void(0);' onClick={ () => { this.deleteItem(item.id) } }>Delete</a>
      </div>
    )
  }
}
