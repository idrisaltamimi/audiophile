import React from 'react'
import data from '../../data/data.json'
import { Link } from 'react-router-dom'
import BestGear from '../../components/BestGear'
import CategoriesList from '../../components/nav/CategoriesList'

export default function Category(props) {
   const { categoryName } = props
   const categoryProducts = data.filter(item => item.category === categoryName).reverse()
   return (
      <>
         <div className='category__header'>
            <h2>{categoryName}</h2>
         </div>
         {categoryProducts.map(({ slug, name, categoryImage, description, isNew, category }) => {
            const desktopImg = "../." + categoryImage.desktop
            const tabletImg = "../." + categoryImage.tablet
            const mobileImg = "../." + categoryImage.mobile
            const productName = name.substring(0, name.lastIndexOf(' '))
            return (
               <section key={slug} className='category__product-container'>
                  <picture>
                     <source
                        srcSet={desktopImg} media='(min-width: 769px)' />

                     <source
                        srcSet={tabletImg} media='(min-width: 376px)' />

                     <img className='footer__best-gear--img' alt={"a picture of " + name}
                        src={mobileImg} />
                  </picture>

                  <div className='category__product-info'>
                     <p className='overline category__product-info-overline'>{isNew && "NEW PRODUCT"}</p>

                     <h2 className='category__product-info-title'>{productName} <span>{category}</span></h2>

                     <p className='paragraph'>{description}</p>

                     <Link to={`/${categoryName}/${slug}`}
                        className='link-btn category__product-info-btn'>
                        see Product
                     </Link>
                  </div>
               </section>
            )

         })}
         <div className='category__categories'>
            <CategoriesList />
         </div>
         <BestGear />
      </>
   )
}
