import { ProductType } from './product.interface'

export interface OrderTypes extends ShippingInfoType, CustomizationTypes {
  price?: number
}

export interface ShippingInfoType {
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
  product?: ProductType
  size: string
}
