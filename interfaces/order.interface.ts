import { productType } from './product.interface'

export interface OrderTypes extends ShippingInfo, CustomizationTypes {
  price?: number
}

export interface ShippingInfo {
  name: string
  phone: string
  email: string
  address: string
  address_optional?: string
  city: string
  zip: string
  country?: string
}

export interface CustomizationTypes {
  optional: string
  quality: number
  quantity: number
  products: productType[]
  size: string
}
