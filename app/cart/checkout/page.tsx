'use client'
import Button from '@/components/shared/Button'
import { clearCart } from '@/utils/cart.handler'

const CheckoutPage = () => {
  return (
    <div className='container grid gap-5 py-20 lg:grid-cols-2'>
      <div>
        <h3 className='mini_title'>Billing Summery</h3>
        <div>
          <p className='flex items-center justify-between'>
            <span>Total Price:</span> <span>300$</span>
          </p>
          <p className='flex items-center justify-between'>
            <span>Total Tax:</span> <span>300$</span>
          </p>
          <p className='mt-1 flex items-center justify-between border-t pt-1'>
            <span>Sub Total:</span>
          </p>
        </div>
      </div>
      <div>
        <h3 className='mini_title'>Choose Your Payment Partner</h3>
        <div className='flex h-40 items-end justify-end'>
          <Button onClick={() => clearCart()}>Pay Now</Button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
