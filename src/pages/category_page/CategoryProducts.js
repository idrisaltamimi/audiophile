import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryProducts({ categoryProducts }) {
   return (
      <>
         {categoryProducts.map(({ slug, name, categoryImage, description, isNew, category }) => {
            const desktopImg = categoryImage.desktop
            const tabletImg = categoryImage.tablet
            const mobileImg = categoryImage.mobile
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

                     <Link to={`/${slug}`}
                        className='link-btn category__product-info-btn'>
                        see Product
                     </Link>
                  </div>
               </section>
            )

         })}
      </>
   )
}
