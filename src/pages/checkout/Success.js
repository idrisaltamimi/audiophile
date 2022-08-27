import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../components/modal/Modal'
import { CartContext } from '../../context/cartContext'
import cartData from '../../data/cart_data'
import countCartItems from '../../utils/count_items'
import totalPrice from '../../utils/total_price'
import Checkout from './Checkout'

export default function Success() {
   const { cartArr, removeCartItems } = useContext(CartContext)
   return (
      <>
         <Modal open={true} close={false} modalClass='success__modal' overlay='success__overlay'>
            <div className='success'>
               <img src='./assets/checkout/icon-order-confirmation.svg' alt='' className='success__img' />

               <h4 className='success__title'>THANK YOU <br />FOR YOUR ORDER</h4>

               <p>You will receive an email confirmation shortly.</p>

               <div className='success__containers'>
                  <div className='success__container'>
                     <img src={`./assets/cart/image-${cartData(cartArr)[0].slug}.jpg`} alt='' />
                     <div className='success__subcontainer'>
                        <p>{cartData(cartArr)[0].name}</p>
                        <p>$ {cartData(cartArr)[0].price.toLocaleString()}</p>
                     </div>
                     <p className='success__count'>x{countCartItems(cartArr, cartArr[0])}</p>
                     {cartData(cartArr).length > 1 &&
                        <>
                           <hr />
                           <p className='success__count-others'>and {cartData(cartArr).length - 1} other item(s)</p>
                        </>
                     }
                  </div>

                  <div className='success__container-bottom'>
                     <p>Grand Total</p>
                     <p>$ {totalPrice(cartArr).toLocaleString()}</p>
                  </div>
               </div>

               <Link to={'/'} className='link-btn product__add-to-cart-btn' onClick={() => removeCartItems()}>back to home</Link>
            </div>
         </Modal>
         <Checkout />
      </>
   )
}
