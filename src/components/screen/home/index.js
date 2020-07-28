import React, {Component} from 'react';
import api from '../../../api'
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
    api.blog.getBlogPosts().then(res => console.log(res?.data)).catch(err => alert(err))
    // api.blog.postBlogPost({body: 'Mallo hallo', author: 'Chuvak', title: "Some title"}).then(res => console.log(res?.data)).catch(err => alert(err))
    // api.blog.deleteBlogPost("5f206a4ef39d8c145fea5dc7").then(res => console.log(res?.data)).catch(err => alert(err))
    // api.blog.updateBlogPost("5f206a4ef39d8c145fea5dc7", {body: 'Mallo hallo', author: 'Chuvak', title: "Some title"}).then(res => console.log(res?.data)).catch(err => alert(err))

  }

  render() {
    return <div>
      {this.state.hello}
    </div>
  }
}