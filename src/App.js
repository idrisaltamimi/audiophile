import React from 'react'

import { CartContextProvider } from './context/cartContext'
import Main from './components/app/Main'
import Header from './components/app/Header'
import Footer from './components/app/Footer'

function App() {

   return (
      <CartContextProvider>
         <Header />
         <Main />
         <Footer />
      </CartContextProvider>
   )
}

export default App
