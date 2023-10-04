import { ProductType } from '@/interfaces/product.interface'

const saveToCart = (product: ProductType) => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')

  const existingProduct = cartItems.find(
    (item: ProductType) => item._id === product._id
  )

  if (existingProduct) {
    Object.assign(existingProduct, product)
  } else {
    cartItems.push(product)
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

const delFromCart = (id: string) => {
  const cartItems: ProductType[] = JSON.parse(
    localStorage.getItem('cart') || '[]'
  )
  const updatedCartItems = cartItems.filter((item) => item._id !== id)

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
}

export { delFromCart as DelFromCart, saveToCart }
