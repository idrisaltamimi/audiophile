import { Link } from 'react-router-dom'
import categoriesArr from "../data/category_id"
import { toTopSmooth } from './no_focus'



const categoriesLinks = (className) => categoriesArr.map(category => {
   return (
      <Link
         onClick={toTopSmooth}
         key={category} className={className} to={`/${category}`}>{category}</Link>
   )
})

export { categoriesLinks }