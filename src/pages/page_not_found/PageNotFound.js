import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
   return (
      <>
         <div className='not-found__header'>
            <h1>404</h1>
         </div>
         <section className='not-found'>

            <h3>Oops!</h3>
            <p>We're sorry,<br /> The page you were looking for doesn't exist anymore.</p>
            <Link to='/' className='link-btn product__add-to-cart-btn'>Back To Home</Link>
         </section>
      </>
   )
}
