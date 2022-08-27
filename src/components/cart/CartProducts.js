import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/cartContext'

import cartData from '../../data/cart_data'
import countCartItems from '../../utils/count_items'
import { removeFocus } from '../../utils/no_focus'

export default function CartProducts({ closeCart }) {
   const { cartArr, addItem, removeItem } = useContext(CartContext)

   return (
      <>
         {cartArr.length > 0 &&
            <div className='cart__products'>
               {cartData(cartArr).map(({ slug, name, price }) => (
                  <div key={slug} className='cart__product'>
                     <img src={`./assets/cart/image-${slug}.jpg`} alt={name} className='cart__img' />
                     <h5>{name}</h5>
                     <p className='cart__product-price'>$ {price.toLocaleString()}</p>
                     <div className='cart__count-container'>
                        <button className='cart__count-items cart__item-btn'
                           onClick={(e) => {
                              removeFocus(e)
                              removeItem(slug)
                           }
                           }>
                           -
                        </button>
                        <p className='cart__count-items'>{countCartItems(cartArr, slug)}</p>
                        <button className='cart__count-items cart__item-btn'
                           onClick={(e) => {
                              removeFocus(e)
                              addItem(slug)
                           }
                           }>
                           +
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         }
         {cartArr.length === 0 &&
            <div >
               <p className='cart__empty'>Your Cart is embty.</p>
               <p className='cart__empty-p'>Continue shopping on the audiophile website <Link to='/' className='cart__empty-link' onClick={() => closeCart()}>homepage</Link>.</p>
            </div>
         }
      </>
   )
}
