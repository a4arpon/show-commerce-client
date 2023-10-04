'use client'

import ShippingInfo from '@/components/others/checkout/ShippingInfo'
import Button from '@/components/shared/Button'
import { CustomizationTypes } from '@/interfaces/order.interface'
import { delFromCart, getCartItems } from '@/utils/cart.handler'
import { useCallback, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CustomizationTypes[] | null>(null)
  useEffect(() => {
    setCartItems(getCartItems())
    return () => {
      setCartItems(null)
    }
  }, [])

  const handleDeleteFromCart = useCallback((id: string) => {
    delFromCart(id)
    setCartItems(getCartItems())
  }, [])
  return (
    <section id='cart' className='container grid gap-5 py-20 lg:grid-cols-2'>
      <div className='flex justify-end lg:col-span-2'>
        {cartItems && cartItems.length > 0 ? (
          <Button link='/cart/checkout'>Proceed To Checkout</Button>
        ) : (
          <Button link='/'>Start Shopping</Button>
        )}
      </div>
      <div>
        <h3 className='mini_title'>Products</h3>
        <div>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className='text-left'>Product</th>
                <th className='text-left'>Quantity</th>
                <th className='text-left'>Price</th>
                <th className='text-left'>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((item) => (
                  <tr key={item.product?._id}>
                    <td>{item?.product?.name}</td>
                    <td>{item?.quantity}</td>
                    <td>
                      {item?.product?.price && item?.product?.tax
                        ? `${item.product.price + item.product.tax}$`
                        : 'N/A'}
                    </td>
                    <td>
                      <Button
                        variant='ghost'
                        width='fit-2'
                        onClick={() =>
                          handleDeleteFromCart(item?.product?._id ?? '')
                        }
                      >
                        <BsTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className='mini_title'>Shipping Info</h3>
        <ShippingInfo />
      </div>
    </section>
  )
}

export default CartPage
