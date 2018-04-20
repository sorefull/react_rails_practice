class NewItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static propTypes: {
    reloadStateHandler: React.PropTypes.func
  }

  buildJson() {
    var object = {}
    let formData = new FormData(this.myForm)
    formData.forEach(function(value, key) { object[key] = value })
    return JSON.stringify({ item: object })
  }

  handleSubmit(event) {
    event.preventDefault()

    fetch('/api/items.json', { body: this.buildJson(), method: "POST", headers: {'Content-Type': 'application/json'} })
      .then((results) => { return results.json() })
      .then((data) => { this.props.reloadStateHandler(data) })
  }

  render(){
    return (
      <form onSubmit={ this.handleSubmit } ref={(form) => this.myForm = form }>
        <input type="text" name="title" placeholder="Put your junk here..." />
        <button type="submit">Squirt</button>
      </form>
    )
  }
}
