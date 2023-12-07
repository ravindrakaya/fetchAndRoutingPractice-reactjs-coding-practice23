import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

// import {async} from 'fast-glob'

// Write your JS code here

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({
      blogsList: updateData,
      isLoading: false,
    })
  }

  render() {
    const {blogsList, isLoading} = this.state
    // console.log(blogsList)
    return (
      <ul className="blogs-list-container">
        {isLoading ? (
          <div className="loader" data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(eachItem => (
            <BlogItem key={eachItem.id} blogItem={eachItem} />
          ))
        )}
      </ul>
    )
  }
}
export default BlogList
