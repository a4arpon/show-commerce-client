export interface ProductType {
  _id: string
  name: string
  photoUrl: string
  rawPhoto: string
  price: number
  quality: number
  tax: number
  optional: Optional[]
}

export interface Optional {
  _id: string
  name: string
  price: number
  image?: string
}
