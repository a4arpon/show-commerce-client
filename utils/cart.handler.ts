import { productType } from '@/interfaces/product.interface'

const saveToCart = (product: productType) => {
  const localDB = JSON.stringify(localStorage.getItem('cartDB'))
  if (localDB) {
  }
}

const DelFromCart = (id: string) => {}
