import React from 'react'
import { HashRouter } from 'react-router-dom'

import { CartContextProvider } from './context/cartContext'
import Main from './components/app/Main'
import Header from './components/app/Header'
import Footer from './components/app/Footer'

function App() {

   return (
      <HashRouter>
         <CartContextProvider>
            <Header />
            <Main />
            <Footer />
         </CartContextProvider>
      </HashRouter>
   )
}

export default App
