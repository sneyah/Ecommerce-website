import BlogCard from '../../components/BlogCard'
import './Blog.css'
import { blogData } from '../../constants/index'


const Blog = () => {
  return (
    <section id="blog">
      <div className="title">
        <h2>Latest News</h2>
      </div>
      <div className="blog-container container">
        {
          blogData.map(item => (
          <BlogCard key ={item.imgURL}{...item}/>
          ))
        }
      </div>
    </section>
  )
}

export default Blog
