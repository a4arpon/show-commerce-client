import { CustomizationTypes } from '@/interfaces/order.interface'

export const saveToCart = (product: CustomizationTypes) => {
  if (typeof window !== 'undefined') {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')

    const existingProduct = cartItems.find(
      (item: CustomizationTypes) => item.product?._id === product.product?._id
    )

    if (existingProduct) {
      Object.assign(existingProduct, product)
    } else {
      cartItems.push(product)
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  } else {
    return null
  }
}

export const getCartItems = (): CustomizationTypes[] => {
  if (typeof window !== 'undefined') {
    const cartItems: CustomizationTypes[] = JSON.parse(
      localStorage.getItem('cartItems') || '[]'
    )
    return cartItems
  }
  return []
}

export const delFromCart = (id: string) => {
  if (typeof window !== 'undefined') {
    const cartItems: CustomizationTypes[] = JSON.parse(
      localStorage.getItem('cartItems') || '[]'
    )
    const updatedCartItems = cartItems.filter(
      (item) => item.product?._id !== id
    )

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  } else {
    return null
  }
}

export const clearCart = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('cartItems')
  } else {
    return null
  }
}
