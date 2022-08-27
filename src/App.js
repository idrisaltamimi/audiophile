import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { CartContextProvider } from './context/cartContext'
import Main from './components/app/Main'
import Header from './components/app/Header'
import Footer from './components/app/Footer'

function App() {

   return (
      <Router basename="/audiophile">
         <CartContextProvider>
            <Header />
            <Main />
            <Footer />
         </CartContextProvider>
      </Router>
   )
}

export default App
