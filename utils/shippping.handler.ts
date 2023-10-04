import { ShippingInfoType } from '@/interfaces/order.interface'

const saveShippingInfo = (data: ShippingInfoType) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('shippingInfo', JSON.stringify(data))
  } else {
    return null
  }
}

const deleteShippingInfo = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('shippingInfo')
  } else {
    return null
  }
}

const getShippingInfo = (): ShippingInfoType | null => {
  if (typeof window !== 'undefined') {
    const shippingInfo = localStorage.getItem('shippingInfo')
    return shippingInfo ? JSON.parse(shippingInfo) : null
  } else {
    return null
  }
}

export { deleteShippingInfo, getShippingInfo, saveShippingInfo }
