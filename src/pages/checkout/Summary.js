import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import cartData from '../../data/cart_data'
import countCartItems from '../../utils/count_items'
import totalPrice from '../../utils/total_price'

export default function Summary() {
   const { cartArr } = useContext(CartContext)

   return (
      <>
         <h4 className='summary__title'>summary</h4>
         {cartArr.length > 0 &&
            <div className='summary__products'>
               {cartData(cartArr).map(({ slug, name, price }) => (
                  <div key={slug} className='summary__product'>
                     <img src={`./assets/cart/image-${slug}.jpg`} alt={name} className='summary__img' />
                     <div>
                        <h5>{name}</h5>
                        <p className='summary__product-price'>$ {price.toLocaleString()}</p>
                     </div>
                     <p className='summary__count-items'>x{countCartItems(cartArr, slug)}</p>
                  </div>
               ))}
            </div>
         }
         <div className='summary__payment'>
            <div className='summary__pay-container'>
               <p className='summary__label'>Total</p>
               <p className='summary__price'>$ {totalPrice(cartArr).toLocaleString()}</p>
            </div>
            <div className='summary__pay-container'>
               <p className='summary__label'>SHIPPING</p>
               <p className='summary__price'>$ 50</p>
            </div>
            <div className='summary__pay-container'>
               <p className='summary__label'>VAT (INCLUDED)</p>
               <p className='summary__price'>$ {(totalPrice(cartArr) * (1079 / 5396)).toFixed(2).toLocaleString()}</p>
            </div>
            <div className='summary__pay-container'>
               <p className='summary__label'>GRAND TOTAL</p>
               <p className='summary__price'>$ {(totalPrice(cartArr) + 50).toLocaleString()}</p>
            </div>
         </div>
         <button
            className='link-btn product__add-to-cart-btn summary__pay-btn'>
            CONTINUE & PAY
         </button>
      </>
   )
}
