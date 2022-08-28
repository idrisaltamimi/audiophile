import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
   return (
      <div className='home__products'>
         <section className='home__products--item-top home__products--sections'>
            <div className='home__products--container-top'>
               <picture>
                  <source
                     srcSet={'./assets/home/desktop/image-speaker-zx9.png'} media='(min-width: 769px)' />

                  <source
                     srcSet={'./assets/home/tablet/image-speaker-zx9.png'} media='(min-width: 376px)' />

                  <img className='home__products--top-img' alt='a png of zx9 speaker'
                     src={'./assets/home/mobile/image-speaker-zx9.png'} />
               </picture>
               <div className='home__products--circles' />
            </div>
            <div className='home__products--container-bottom'>
               <h1 className='home__products--title-light'>ZX9 SPEAKER</h1>

               <p className='home__products--paragraph paragraph'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>

               <Link to='/zx9-speaker'
                  className='home__products--btn-dark link-btn home__first-btn'>
                  see product
               </Link>
            </div>
         </section>

         <section className='home__products--item-mid home__products--sections'>
            <h4 className='home__products--title'>ZX7 SPEAKER</h4>

            <Link to='/zx7-speaker'
               className='home__products--btn link-btn'>
               see product
            </Link>
         </section>

         <section className='home__products--item-bottom home__products--sections'>
            <picture>
               <source
                  srcSet={'./assets/home/desktop/image-earphones-yx1.jpg'} media='(min-width: 1300px)' />

               <source
                  srcSet={'./assets/home/tablet/image-earphones-yx1.jpg'} media='(min-width: 835px)' />

               <img className='home__products--bottom-img home__products--sections' alt='a png of zx7 speaker'
                  src={'./assets/home/mobile/image-earphones-yx1.jpg'} />
            </picture>

            <div className='home__products--background-bottom home__products--sections'>
               <h4 className='home__products--title'>YX1 EARPHONES</h4>

               <Link to='/yx1-earphones'
                  className='home__products--btn link-btn'>
                  see product
               </Link>
            </div>

         </section>
      </div>
   )
}
