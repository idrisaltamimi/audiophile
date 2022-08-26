import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BestGear from '../../components/BestGear'
import CategoriesList from '../../components/nav/CategoriesList'
import data from '../../data/data.json'
import ProductOverview from './ProductOverview'

export default function ProductPage({ productId }) {
   const navigate = useNavigate()
   const productData = data.find(({ slug }) => slug === productId)
   const productName = productData.name.substring(0, productData.name.lastIndexOf(' '))
   const features = productData.features.split('\n\n')
   return (
      <>
         <section className='go_back-btn'>
            <button onClick={() => navigate(-1)} className='paragraph checkout__back'>Go Back</button>
         </section>
         <ProductOverview productData={productData} productName={productName} />

         <section className='product__mid-container'>
            <div className='product__section product__section-style product__features product__mid'>
               <h4 className='product__subtitle'>features</h4>
               <p>
                  {features[0]}
                  <br />
                  <br />
                  {features[1]}
               </p>
            </div>

            <div className='product__section product__box-container product__mid'>
               <h4 className='product__subtitle'>in the box</h4>
               {productData.includes.map(({ quantity, item }) => (
                  <div key={item} className='product__box'>
                     <p className='product__box-quantity'>{quantity}x</p>
                     <p>{item}</p>
                  </div>
               ))}
            </div>
         </section>

         <section className='product__section product__gallery'>
            {productData.gallery.map(({ desktop, tablet, mobile }, index) => (
               <div key={desktop} className={'product__gallery-img' + index} >
                  <picture >
                     <source
                        srcSet={"../." + desktop} media='(min-width: 769px)' />

                     <source
                        srcSet={"../." + tablet} media='(min-width: 376px)' />

                     <img className='footer__best-gear--img' alt={"a picture of " + productData.name}
                        src={"../." + mobile} />
                  </picture>
               </div>
            ))}
         </section>

         <section className='product__section-bottom product__bottom'>
            <h4 className='product__subtitle product__others-title'>you may also like</h4>
            {productData.others.map(({ slug, name, image }, index) => {
               const categoryId = data.find(item => item.slug === slug)
               return (
                  <div key={slug} className={'product__others product__others' + index}>
                     <picture >
                        <source
                           srcSet={"../." + image.desktop} media='(min-width: 769px)' />

                        <source
                           srcSet={"../." + image.tablet} media='(min-width: 376px)' />

                        <img className='footer__best-gear--img' alt={"a picture of " + name}
                           src={"../." + image.mobile} />
                     </picture>

                     <h4 className='product__subtitle others__title'>{name}</h4>

                     <Link
                        to={`/${categoryId.category}/${slug}`}
                        onClick='scroll(0, 0)'
                        className='link-btn product__others-btn'>
                        see product
                     </Link>
                  </div>
               )
            })}
         </section>

         <div className='product__bottom'>
            <CategoriesList />
         </div>

         <BestGear />

      </>
   )
}
