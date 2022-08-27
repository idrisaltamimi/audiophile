import React, { useState } from 'react'

export default function Payment() {
   const [isEMoney, setIsEMoney] = useState(true)

   const handleChange = (e) => {
      const { id } = e.target
      if (id === 'cash') return setIsEMoney(false)
      return setIsEMoney(true)
   }
   return (
      <div className='checkout__form-container'>
         <h5 className='checkout__subtitle'>payment details</h5>

         <div className='radio__container'>
            <label htmlFor='payment'>Payment Method</label>
            <div className='checkout__radio'>
               <input
                  required
                  id='e-money'
                  type='radio'
                  value='e-Money'
                  name='payment'
                  onChange={(e) => handleChange(e)} />
               <label className='radio-border' htmlFor='e-money' />
               <label htmlFor='e-money'>
                  e-Money
               </label>
            </div>

            <div className='checkout__radio radio_bottom'>
               <input
                  required
                  id='cash'
                  type='radio'
                  value='e-Money'
                  name='payment'
                  onChange={(e) => handleChange(e)} />
               <label className='radio-border' htmlFor='cash' />
               <label htmlFor='cash'>
                  Cash on Delivery
               </label>
            </div>
         </div>

         {isEMoney &&
            <div className='e-money'>
               <div className='form-container'>
                  <label htmlFor='e-moneyN'>
                     e-Money Number
                  </label>
                  <input
                     required
                     id='e-moneyN'
                     type='number'
                     placeholder='238521993' />
               </div>

               <div className='form-container'>
                  <label htmlFor='e-moneyP'>
                     e-Money PIN
                  </label>
                  <input
                     required
                     id='e-moneyP'
                     type='number'
                     placeholder='6891' />
               </div>
            </div>
         }

         {!isEMoney &&
            <div className='checkout__cash'>
               <img src='./assets/checkout/icon-cash-on-delivery.svg' alt='' />
               <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>}
      </div>
   )
}
