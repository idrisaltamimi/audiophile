import React from 'react'

export default function ProductInfo({ productData }) {
   const features = productData.features.split('\n\n')
   const [features1, features2] = features
   return (
      <>
         <section className='product__mid-container'>
            <div className='product__section product__section-style product__features product__mid'>
               <h4 className='product__subtitle'>features</h4>
               <p>{features1}</p>
               <p>{features2}</p>
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
         {/* product images */}
         <section className='product__section product__gallery'>
            {productData.gallery.map(({ desktop, tablet, mobile }, index) => (
               <div key={desktop} className={'product__gallery-img' + index} >
                  <picture >
                     <source
                        srcSet={desktop} media='(min-width: 769px)' />

                     <source
                        srcSet={tablet} media='(min-width: 376px)' />

                     <img className='footer__best-gear--img' alt={"a picture of " + productData.name}
                        src={mobile} />
                  </picture>
               </div>
            ))}
         </section>
      </>
   )
}
