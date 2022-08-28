import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'
import Category from '../../pages/category_page/Category'
import Home from '../../pages/home/Home'
import ProductPage from '../../pages/product_page/ProductPage'

import categoriesArr from '../../data/category_id'
import data from '../../data/data.json'
import Checkout from '../../pages/checkout/Checkout'
import Success from '../../pages/checkout/Success'
import ScrollToTop from '../scroll_restoration/ScrollToTop'
import PageNotFound from '../../pages/page_not_found/PageNotFound'

export default function Main() {

   const categoriesRoutes = categoriesArr.map(category =>
      <Route key={category} path={`/${category}`}
         element={<Category categoryName={category} />} />
   )
   const productsRoutes = data.map(({ slug }) =>
      <Route key={slug} path={`/${slug}`}
         element={<ProductPage productId={slug} />} />
   )
   return (
      <main>
         <ScrollToTop />
         <Routes>
            <Route path='/' element={<Home />} />
            {categoriesRoutes}
            {productsRoutes}
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success' element={<Success />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
         </Routes>
      </main>
   )
}
