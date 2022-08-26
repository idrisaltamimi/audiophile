import React, { useState } from "react"

const CartContext = React.createContext()

function CartContextProvider({ children }) {
   const [cartArr, setCartArr] = useState(JSON.parse(localStorage.getItem('cartArr')) || [])

   const addToCart = (slug, count) => {
      for (let i = 0; i < count; i++) {
         setCartArr(prevState => [...prevState, slug])
      }
   }
   const addItem = (slug) => {
      setCartArr(prevState => [...prevState, slug])
   }
   const removeItem = (slug) => {
      const index = cartArr.findIndex(item => item === slug)
      const newArray = [...cartArr]
      if (index !== -1) {
         newArray.splice(index, 1)
      }
      setCartArr(newArray)
   }

   const removeCartItems = () => setCartArr([])

   localStorage.setItem('cartArr', JSON.stringify(cartArr))
   return (
      <CartContext.Provider value={{ cartArr, addToCart, removeCartItems, addItem, removeItem }}>
         {children}
      </CartContext.Provider>
   )
}


export { CartContextProvider, CartContext }