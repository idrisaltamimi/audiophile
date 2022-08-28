import React from 'react'
import { useNavigate } from 'react-router-dom'
import BestGear from '../../components/BestGear'
import CategoriesList from '../../components/nav/CategoriesList'
import data from '../../data/data.json'
import OtherProducts from './OtherProducts'
import ProductInfo from './ProductInfo'
import ProductOverview from './ProductOverview'

export default function ProductPage({ productId }) {
   const navigate = useNavigate()
   const productData = data.find(({ slug }) => slug === productId)
   const productName = productData.name.substring(0, productData.name.lastIndexOf(' '))
   return (
      <>
         <section className='go_back-btn'>
            <button onClick={() => navigate(-1)} className='paragraph checkout__back'>Go Back</button>
         </section>

         <ProductOverview productData={productData} productName={productName} />

         <ProductInfo productData={productData} />

         <OtherProducts productData={productData} />

         <CategoriesList closeNav={() => false} />

         <BestGear />

      </>
   )
}
