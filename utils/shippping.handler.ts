import { ShippingInfoType } from '@/interfaces/order.interface'

const saveShippingInfo = (data: ShippingInfoType) => {
  localStorage.setItem('shippingInfo', JSON.stringify(data))
}

const deleteShippingInfo = () => {
  localStorage.removeItem('shippingInfo')
}

const getShippingInfo = (): ShippingInfoType | null => {
  const shippingInfo = localStorage.getItem('shippingInfo')

  return shippingInfo ? JSON.parse(shippingInfo) : null
}

export { deleteShippingInfo, getShippingInfo, saveShippingInfo }

