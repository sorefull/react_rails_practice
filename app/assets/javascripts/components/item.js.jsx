class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      title: props.item.title,
      id: props.item.id
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static propTypes: {
    item: React.PropTypes.object,
    reloadStateHandler: React.PropTypes.func
  }

  deleteItem() {
    apiDeleteItem(this.state.id)
      .then((results) => {return results.json()})
      .then((data) => {this.props.reloadStateHandler(data)})
  }

  handleSubmit(event) {
    event.preventDefault()

    apiUpdateItem(apiBuildJson(this.myForm), this.state.id)
      .then((results) => {return results.json()})
      .then((data) => {this.props.reloadStateHandler(data)})
      .then(() => {this.setState({showForm: false})})
  }

  handleChange({target:{value}}) {
    this.setState({title: value})
  }

  renderFrom() {
    return(
      <form onSubmit={this.handleSubmit} ref={(form) => {this.myForm = form}}>
        <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
        <a href='javascript:void(0);' onClick={() => {this.setState({showForm: false})}}>Cancel</a>
      </form>
    )
  }

  render() {
    const {title} = this.props.item

    return (
      <div>
        {!this.state.showForm && <div onClick={() => {this.setState({showForm: true})}}>Title: {title}</div>}
        {this.state.showForm && this.renderFrom()}
        <a href='javascript:void(0);' onClick={() => {this.deleteItem()}}>Delete</a>
      </div>
    )
  }
}
