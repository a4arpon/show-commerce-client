import Button from '@/components/shared/Button'
import { ShippingInfoType } from '@/interfaces/order.interface'
import { getShippingInfo, saveShippingInfo } from '@/utils/shippping.handler'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

const ShippingInfo = () => {
  const { register, handleSubmit } = useForm<ShippingInfoType>()
  const existingShippingInfo = getShippingInfo()
  const [shippingInfo, setShippingInfo] = useState<ShippingInfoType | null>(
    existingShippingInfo
  )
  // Handle unnecessary re-renders.
  const handleForm = useCallback((data: ShippingInfoType) => {
    saveShippingInfo(data)
    setShippingInfo(data)
  }, [])

  if (!existingShippingInfo || !shippingInfo) {
    return (
      <form
        className='flex flex-col gap-3 lg:grid lg:grid-cols-2'
        onSubmit={handleSubmit(handleForm)}
      >
        <div className='flex flex-col gap-2 lg:col-span-2'>
          <label>Name</label>
          <input
            type='text'
            {...register('name', { required: true })}
            defaultValue={shippingInfo?.name}
            className='input'
            placeholder='Enter your name.'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Email</label>
          <input
            type='email'
            defaultValue={shippingInfo?.email}
            {...register('email', { required: true })}
            className='input'
            placeholder='Enter your email.'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Phone</label>
          <input
            type='text'
            defaultValue={shippingInfo?.phone}
            {...register('phone', { required: true })}
            className='input'
            placeholder='Enter your phone.'
          />
        </div>
        <div className='flex flex-col gap-2 lg:col-span-2'>
          <label>Address</label>
          <input
            type='text'
            defaultValue={shippingInfo?.address}
            {...register('address', { required: true })}
            className='input'
            placeholder='Enter your address.'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Address Line 2</label>
          <input
            type='text'
            defaultValue={shippingInfo?.address_optional}
            {...register('address_optional')}
            className='input'
            placeholder='Enter your address line 2.'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Zip Code</label>
          <input
            type='text'
            defaultValue={shippingInfo?.zip}
            {...register('zip', { required: true })}
            className='input'
            placeholder='Enter your area zip code.'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>City</label>
          <input
            type='text'
            defaultValue={shippingInfo?.city}
            {...register('city', { required: true })}
            className='input'
            placeholder='Enter your city.'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Country</label>
          <input
            type='text'
            defaultValue={shippingInfo?.country}
            {...register('country', { required: true })}
            className='input'
            placeholder='Enter your country.'
          />
        </div>
        <div className='flex justify-end lg:col-span-2'>
          <Button>Save Info</Button>
        </div>
      </form>
    )
  } else {
    return (
      <div className='flex flex-col gap-5 lg:grid lg:grid-cols-2'>
        <div className='flex flex-col gap-1'>
          <label>Name</label>
          <p>{shippingInfo?.name}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <label>Email</label>
          {shippingInfo?.email}
        </div>
        <div className='flex flex-col gap-1'>
          <label>Phone</label>
          {shippingInfo?.phone}
        </div>
        <div className='flex flex-col gap-1'>
          <label>Address</label>
          {shippingInfo?.address} / {shippingInfo?.address_optional}
        </div>
        <div className='flex flex-col gap-1'>
          <label>Zip</label>
          {shippingInfo?.zip}
        </div>
        <div className='flex flex-col gap-1'>
          <label>City</label>
          {shippingInfo?.city}
        </div>
        <div className='flex flex-col gap-1'>
          <label>Country</label>
          {shippingInfo?.country}
        </div>
        <div className='lg:col-span-2'>
          <Button
          variant="ghost"
            onClick={() => {
              setShippingInfo(null)
            }}
          >
            Clear Info
          </Button>
        </div>
      </div>
    )
  }
}

export default ShippingInfo
