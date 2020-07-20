import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hello: 'Hello'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({hello: 'Hello, Man', loading: false})
    }, 5000)
  }

  render() {
    return <div>
      {this.state.hello}
    </div>
  }
}