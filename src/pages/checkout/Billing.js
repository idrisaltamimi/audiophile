import React, { useState } from 'react'

export default function Billing() {
   const [message, setMessage] = useState('');
   const [error, setError] = useState(null);

   function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
   }

   const handleChange = event => {
      if (!isValidEmail(event.target.value)) {
         setError('Email is invalid')
      } else {
         setError(null);
      }
      setMessage(event.target.value)
   }
   const emailClassInput = error === 'Email is invalid' ? 'input__email-not-valid' : ''
   const emailClassLabel = error === 'Email is invalid' ? 'label__email-not-valid' : ''

   return (
      <div className='checkout__form-container'>
         <h5 className='checkout__subtitle'>Billing details</h5>
         <div className='checkout__billing'>
            <div className='form-container'>
               <label htmlFor="name">
                  Name
               </label>
               <input
                  required
                  id='name'
                  type='text'
                  placeholder='Alexei Ward' />
            </div>

            <div className='form-container'>
               <label htmlFor='email' className={emailClassLabel}>
                  Email Address
               </label>
               <input
                  required
                  onChange={handleChange}
                  className={emailClassInput}
                  id='email'
                  type='email'
                  value={message}
                  placeholder='alexei@mail.com' />
            </div>

            <div className='form-container'>
               <label htmlFor='phoneNumber'>
                  Phone Number
               </label>
               <input
                  required
                  id='phoneNumber'
                  type='number'
                  placeholder='+1 202-555-0136' />
            </div>
         </div>
      </div>
   )
}
