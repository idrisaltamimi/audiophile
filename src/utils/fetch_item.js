import data from '../data/data.json'

const categoryProductsArr = (categoryId) => {
   data.find(item => item.category === categoryId)
}

export { categoryProductsArr }