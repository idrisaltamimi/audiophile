import React from 'react'
import { Link } from 'react-router-dom'
import BestGear from '../../components/BestGear'
import CategoriesList from '../../components/nav/CategoriesList'
import Products from './Products'

export default function Home() {
   return (
      <>
         <div>
            <div className='header__image'>
               <section className='header__bottom'>
                  <p className='header__bottom--new-product overline'>NEW PRODUCT</p>
                  <h1 className='header__bottom--title'>XX99 Mark II Headphones</h1>
                  <p className='header__bottom--paragraph paragraph'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                  <Link to='/xx99-mark-two-headphones'
                     onClick={() => window.scrollTo(0, 0)}
                     className='header__bottom--btn link-btn'>
                     see product
                  </Link>
               </section>
            </div>
            <CategoriesList closeNav={() => false} />
            <Products />

         </div>
         <BestGear />
      </>
   )
} 
