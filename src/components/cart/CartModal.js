import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Modal from '../modal/Modal'
import { CartContext } from '../../context/cartContext'

import cartData from '../../data/cart_data'
import CartProducts from './CartProducts'
import totalPrice from '../../utils/total_price'

export default function CartModal({ closeCart, isCartOpen }) {
   const { cartArr, removeCartItems } = useContext(CartContext)

   return (
      <Modal open={isCartOpen} close={closeCart} modalClass='cart__modal'>
         <div className='cart__modal_container'>
            <div className='cart__modal-top'>
               <p className='cart__title'>cart ({cartData(cartArr).length})</p>
               <button className='paragraph cart__remove' onClick={() => removeCartItems()}>Remove all</button>
            </div>

            <CartProducts closeCart={closeCart} />

            <div className='cart__bottom'>
               <p>TOTAL</p>
               <p className='cart__total-price'>$ {totalPrice(cartArr).toLocaleString()}</p>
            </div>

            {cartArr.length > 0 ?
               <Link to='/checkout' className='link-btn product__add-to-cart-btn cart__btn' onClick={() => closeCart()} >checkout</Link>
               :
               <button className='link-btn product__add-to-cart-btn cart__btn'  >checkout</button>}

         </div>
      </Modal>
   )
}
