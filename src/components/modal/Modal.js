
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function Modal({ modalClass, open, close, children, overlay }) {
   const showHideClassName = open ? `${modalClass} modal` : 'modal'

   useEffect(() => {
      if (open) {
         document.body.style.overflow = 'hidden'
         document.body.style.position = 'fixed'
      }
      return () => {
         document.body.style.overflow = 'unset'
         document.body.style.position = 'unset'
      }
   })
   if (!open) return null

   return ReactDOM.createPortal(
      <>
         <div className={`overlay ${overlay}`} onClick={() => close()} />
         <div className={showHideClassName}>
            {children}
         </div>
      </>,
      document.getElementById('portal')
   )
}