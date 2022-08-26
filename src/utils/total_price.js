import cartData from "../data/cart_data"
import countCartItems from "./count_items"

const totalPrice = (cartArr) => {
   let total = 0
   cartData(cartArr).forEach(({ price, slug }) => {
      total += countCartItems(cartArr, slug) * price
   })
   return total
}

export default totalPrice