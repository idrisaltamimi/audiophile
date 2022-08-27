import React from 'react'
import { Link } from 'react-router-dom'
import categoriesArr from '../../data/category_id'

export default function CategoriesList({ closeNav }) {
   return (
      <section className='home__categories'>
         {categoriesArr.map(category => (
            <Link key={category} to={`/${category}`} className='home__categories--nav'
               onClick={() => {
                  window.scrollTo(0, 0)
                  return closeNav()
               }}>
               <img
                  alt={`a png of a ${category}`}
                  src={`./assets/shared/desktop/image-category-thumbnail-${category}.png`}
                  className='home__categories--image' />

               <p className='home__categories--title'>{category}</p>

               <div className='home__categories--shop-container'>
                  <p className='home__categories--shop subtitle'>shop</p>

                  <div className='home__categories--right-arrow'></div>
               </div>
            </Link>
         )
         )}
      </section>
   )
}