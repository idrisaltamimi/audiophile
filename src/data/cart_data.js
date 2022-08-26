import data from './data.json'

const cartData = (arr) => data.map(item => {
   let productName = item.name.split(' ').shift()
   if (item.slug === "xx99-mark-two-headphones") {
      productName = "XX99 MK II"
   }
   if (item.slug === "xx99-mark-one-headphones") {
      productName = "XX99 MK I"
   }
   return (
      {
         slug: item.slug,
         name: productName,
         price: item.price,
         image: item.image.mobile
      }
   )
}).filter(({ slug }) => arr.includes(slug))


export default cartData