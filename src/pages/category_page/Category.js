import React from 'react'
import data from '../../data/data.json'
import BestGear from '../../components/BestGear'
import CategoriesList from '../../components/nav/CategoriesList'
import CategoryProducts from './CategoryProducts'

export default function Category({ categoryName }) {
   const categoryProducts = data.filter(item => item.category === categoryName).reverse()

   return (
      <>
         <div className='category__header'>
            <h2>{categoryName}</h2>
         </div>

         <CategoryProducts categoryProducts={categoryProducts} />

         <div className='category__categories'>
            <CategoriesList closeNav={() => false} />
         </div>
         <BestGear />
      </>
   )
}
