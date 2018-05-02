class Items extends React.Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
    this.reloadState = this.reloadState.bind(this)
  }

  static propTypes: {
    items: React.PropTypes.array
  }

  componentDidMount() {
    apiIndexItems()
      .then((results) => {return results.json()})
      .then((data) => {this.setState(data)})
  }

  renderItems(items) {
    return (
      items.map((item) => {return this.renderItem(item)})
    )
  }

  renderItem(item) {
    return (
      <Item item={item.item} key={item.item.id} reloadStateHandler={this.reloadState} />
    )
  }

  reloadState(data) {
    this.setState({items: data.items})
  }

  render() {
    const {items} = this.state

    return (
      <div>
        <div>Items:</div>
        {this.renderItems(items)}
        <NewItem reloadStateHandler={this.reloadState} />
      </div>
    )
  }
}
