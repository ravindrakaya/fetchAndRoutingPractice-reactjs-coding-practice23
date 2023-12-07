// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// import {async} from 'fast-glob'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }

    this.setState({
      blogData: updateData,
      isLoading: false,
    })
  }

  render() {
    const {blogData, isLoading} = this.state

    const {author, avatarUrl, imageUrl, title, content} = blogData
    return isLoading ? (
      <div className="loader" data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-item-details-container">
        <h1 className="blog-heading">{title} </h1>
        <div className="blog-item-avatar-container">
          <img src={avatarUrl} alt={author} className="blog-alt-img" />
          <p className="blog-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-img" />
        <p> {content} </p>
      </div>
    )
  }
}
export default BlogItemDetails
