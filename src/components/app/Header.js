import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { removeFocus } from '../../utils/no_focus'
import CartModal from '../cart/CartModal'
import Navbar from '../nav/Navbar'

export default function Header() {
   const { cartArr } = useContext(CartContext)

   const [isNavOpen, setIsNavOpen] = useState(false)
   const [isCartOpen, setIsCartOpen] = useState(false)
   const [width, setWidth] = useState(window.innerWidth)

   const openNav = () => setIsNavOpen(true)
   const closeNav = () => setIsNavOpen(false)
   const openCart = () => setIsCartOpen(true)
   const closeCart = () => setIsCartOpen(false)

   const handleResize = () => setWidth(window.innerWidth)

   useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
   }, [])

   useEffect(() => {
      if (width >= 769) setIsNavOpen(false)
   }, [width])

   const cartCount = cartArr.length

   const counterClass = cartCount > 0 ?
      'cart__logo-counter' :
      'cart__logo-counter cart__logo-counter-no-color'

   return (
      <>
         <header className='header '>

            <section className='header__main'>
               {width < 769 &&
                  <div className='hamburger' onClick={() => openNav()}>
                     <div className='header__main--hamburger' />
                  </div>
               }

               <Link to='/' onClick={removeFocus}>
                  <img
                     className='header__main--logo'
                     src={'./assets/shared/desktop/logo.svg'}
                     alt='audiophile logo' />
               </Link>

               <Navbar
                  isNavOpen={isNavOpen}
                  closeNav={closeNav}
                  width={width} />

               <button className='cart__logo-btn' onClick={(e) => {
                  removeFocus(e)
                  window.scrollTo(0, 0)
                  openCart()
               }}>
                  <div className='cart__logo-container'>
                     {cartCount > 0 && <p className={counterClass}>{cartCount}</p>}
                     <img
                        className='header__main--cart-icon'
                        src={'./assets/shared/desktop/icon-cart.svg'}
                        alt='cart icon' />
                  </div>
               </button>
            </section>

            <hr />

         </header>

         {isCartOpen && <CartModal closeCart={closeCart} isCartOpen={isCartOpen} />}
      </>
   )
}
