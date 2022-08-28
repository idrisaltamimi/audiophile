import React from 'react'
import { Link } from 'react-router-dom'

export default function OtherProducts({ productData }) {
   return (
      <div className='product__bottom'>

         <section className='product__section-bottom product__bottom'>
            <h4 className='product__subtitle product__others-title'>you may also like</h4>
            {productData.others.map(({ slug, name, image }, index) => {
               return (
                  <div key={slug} className={'product__others product__others' + index}>
                     <picture >
                        <source
                           srcSet={image.desktop} media='(min-width: 769px)' />

                        <source
                           srcSet={image.tablet} media='(min-width: 376px)' />

                        <img className='footer__best-gear--img' alt={"a picture of " + name}
                           src={image.mobile} />
                     </picture>

                     <h4 className='product__subtitle others__title'>{name}</h4>

                     <Link
                        to={`/${slug}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className='link-btn product__others-btn'>
                        see product
                     </Link>
                  </div>
               )
            })}
         </section>

      </div>
   )
}
