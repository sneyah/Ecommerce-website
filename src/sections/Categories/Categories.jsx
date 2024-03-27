import { categoryData } from '../../constants'
import './Categories.css'
import CategoriesCard from '../../components/CategoriesCard'

const Categories = () => {
  return (
    <section id="categories">
      <div className="title">
        <h2>Categories</h2>
      </div>
      <div className="categories-container container">
        {
          categoryData.map((category) => (
            <CategoriesCard key={category.imgURL} {...category}/> 
          ))
        }
      </div>
    </section>
  )
}

export default Categories
