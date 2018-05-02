class NewItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static propTypes: {
    reloadStateHandler: React.PropTypes.func
  }

  handleSubmit(event) {
    event.preventDefault()

    apiCreateItem(apiBuildJson(this.myForm))
      .then((results) => {return results.json()})
      .then((data) => {this.props.reloadStateHandler(data)})
    this.myForm.title.value = ''
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} ref={(form) => {this.myForm = form}}>
        <input type='text' name='title' placeholder='Put your junk here...' />
      </form>
    )
  }
}
