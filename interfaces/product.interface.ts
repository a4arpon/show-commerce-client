export interface productType {
  _id: string
  name: string
  photoUrl: string
  rawPhoto: string
  price: number
  quality: number
  tax: number
  optional: Optional[]
}

interface Optional {
  _id: string
  name: string
  price: number
  image?: string
}
