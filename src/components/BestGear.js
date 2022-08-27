import React from 'react'

export default function BestGear() {
   return (
      <section className='footer__best-gear'>
         <picture>
            <source
               srcSet={'https://github.com/idrisaltamimi/e-commerce-app-audiophile/blob/main/src/assets/shared/desktop/image-best-gear.jpg?raw=true'} media='(min-width: 769px)' />

            <source
               srcSet={'https://github.com/idrisaltamimi/e-commerce-app-audiophile/blob/main/src/assets/shared/tablet/image-best-gear.jpg?raw=true'} media='(min-width: 376px)' />

            <img className='footer__best-gear--img' alt='a png of zx7 speaker'
               src={'https://github.com/idrisaltamimi/e-commerce-app-audiophile/blob/main/src/assets/shared/mobile/image-best-gear.jpg?raw=true'} />
         </picture>
         <div className='footer__best-gear--container-bottom'>
            <h2 className='footer__best-gear--title'>Bringing you the <span className='color-accent'>best</span> audio gear</h2>

            <p className='footer__best-gear--paragraph paragraph'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
         </div>
      </section>
   )
}
