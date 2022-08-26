const countCartItems = (products, id) => {
   let count = 0
   products.forEach(element => {
      if (element === id) {
         count += 1
      }
   })
   return count
}

export default countCartItems