import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export default function ProductOverview({ productData, productName }) {
   const { cartArr, addToCart } = useContext(CartContext)

   const { slug } = productData
   const [count, setCount] = useState(0)
   const [addedToCart, setAddedToCart] = useState('')

   const increment = (e) => {
      e.target.blur()
      return setCount(prevState => prevState + 1)
   }
   const decrement = (e) => {
      e.target.blur()

      if (count < 1) return setCount(0)
      return setCount(prevState => prevState - 1)
   }
   const handleClick = (e) => {
      (count > 0) && setAddedToCart('added-to-cart')
      e.target.blur()
      return addToCart(slug, count)
   }

   if (addedToCart !== '') {
      setTimeout(() => {
         setAddedToCart('')
      }, 2000)
   }
   return (
      <>
         <section className='product__section product__section-style product__top'>
            <picture>
               <source
                  srcSet={productData.image.desktop} media='(min-width: 769px)' />

               <source
                  srcSet={productData.image.tablet} media='(min-width: 376px)' />

               <img className='footer__best-gear--img product__top-img' alt={"a picture of " + productData.name}
                  src={productData.image.mobile} />
            </picture>

            <div className='product__info-container'>
               <p className='overline overline-color-accent product__new'>{productData.isNew && 'NEW PRODUCT'}</p>

               <h4 className='product__title'>{productName} <span>{productData.category}</span></h4>

               <p>{productData.description}</p>

               <p className='product__price'>$ {productData.price.toLocaleString()}</p>

               <div className='product__add-to-cart-container'>
                  <div className='product__add-to-cart'>
                     <button className='product__count product__count-btn' onClick={(e) => decrement(e)}>-</button>
                     <p className='product__count count'>{count}</p>
                     <button className='product__count product__count-btn' onClick={(e) => increment(e)}>+</button>
                  </div>

                  <button
                     className={`link-btn product__add-to-cart-btn add-to-cart-btn`}
                     onClick={(e) => handleClick(e)}>
                     add to cart
                  </button>
                  {addedToCart !== '' &&
                     <div className={addedToCart} >
                        <div className='product-added'>
                           <div>
                              <img src='./assets/checkout/icon-order-confirmation.svg' alt='' />
                              <p><strong>{count} item(s) has been added to your cart</strong>. You now have {cartArr.length} in your shopping cart.</p>
                           </div>
                        </div>
                     </div>}
               </div>
            </div>
         </section>
      </>
   )
}
