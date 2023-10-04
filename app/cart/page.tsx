'use client'

import ShippingInfo from '@/components/others/checkout/ShippingInfo'
import Button from '@/components/shared/Button'

const CartPage = () => {
  return (
    <section id='cart' className='container grid gap-5 py-20 lg:grid-cols-2'>
      <div className='flex justify-end lg:col-span-2'>
        <Button link='/cart/checkout'>Proceed To Checkout</Button>
      </div>
      <div></div>
      <div>
        <h3 className='mini_title'>Shipping Info</h3>
        <ShippingInfo />
      </div>
    </section>
  )
}

export default CartPage
