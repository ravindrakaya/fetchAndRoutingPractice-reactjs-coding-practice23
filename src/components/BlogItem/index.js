// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="link-class-name">
      <li className="list-item-container">
        <img src={imageUrl} alt={`item${id}`} className="blog-image" />
        <div className="blog-item-text-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author">{author} </p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
