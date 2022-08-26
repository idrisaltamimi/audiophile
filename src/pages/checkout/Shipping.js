import React from 'react'

export default function Shipping() {
   return (
      <div className='checkout__form-container'>
         <h5 className='checkout__subtitle'>shipping info</h5>

         <div className='checkout__shipping'>
            <div className='form-container'>
               <label htmlFor='address'>
                  Your Address
               </label>
               <input
                  required
                  id='address'
                  type='text'
                  placeholder='1137 Williams Avenue' />
            </div>

            <div className='form-container'>
               <label htmlFor='zip'>
                  ZIP Code
               </label>
               <input
                  required
                  id='zip'
                  type='number'
                  placeholder='10001' />
            </div>

            <div className='form-container'>
               <label htmlFor='city'>
                  City
               </label>
               <input
                  required
                  id='city'
                  type='text'
                  placeholder='New York' />
            </div>

            <div className='form-container'>
               <label htmlFor='country'>
                  Country
               </label>
               <input
                  required
                  id='country'
                  type='text'
                  placeholder='United States' />
            </div>
         </div>
      </div>
   )
}
