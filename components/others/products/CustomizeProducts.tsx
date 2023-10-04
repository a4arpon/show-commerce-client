'use client'
import Button from '@/components/shared/Button'
import {
  CustomizationTypes,
  ShippingInfoType,
} from '@/interfaces/order.interface'
import { Optional, ProductType } from '@/interfaces/product.interface'
import { saveToCart } from '@/utils/cart.handler'
import { getShippingInfo } from '@/utils/shippping.handler'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

const CustomizeProducts = ({
  options,
  product,
}: {
  options: Optional[]
  product: ProductType
}) => {
  const { register, handleSubmit } = useForm<CustomizationTypes>()
  const router = useRouter()
  const [customizations, setCustomizations] =
    useState<CustomizationTypes | null>(null)
  const [shippingInfo, setShippingInfo] = useState<ShippingInfoType | null>()

  // Handle unnecessary re-renders.
  const handleForm = useCallback(
    (data: CustomizationTypes) => {
      data.product = product
      setCustomizations(data)
    },
    [product]
  )
  // Handle cpu intensive calculations
  const customizedData = useMemo(() => {
    return customizations
  }, [customizations])

  if (!customizedData) {
    return (
      <form
        className='flex flex-col gap-3 lg:grid lg:grid-cols-2'
        onSubmit={handleSubmit(handleForm)}
      >
        <div className='flex flex-col gap-2'>
          <label>Product Size</label>
          <select className='input' {...register('size', { required: true })}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Product Quality</label>
          <select
            className='input'
            {...register('quality', { required: true })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Finishing Option</label>
          <select
            className='input'
            {...register('optional', { required: true })}
          >
            <option>None</option>
            {options &&
              options.map((item) => (
                <option key={item?._id} value={item._id}>
                  {item?.name} For Additional {item?.price}$
                </option>
              ))}
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Product Quantity</label>
          <select
            className='input'
            {...register('quantity', { required: true })}
          >
            <option>10</option>
            <option>20</option>
            <option>40</option>
            <option>50</option>
            <option>65</option>
            <option>80</option>
            <option>100</option>
            <option>150</option>
            <option>200</option>
            <option>250</option>
            <option>300+</option>
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Customize Front Labeling</label>
          <input
            type='file'
            className='input'
            required
            accept='.jpg, .png, .jpeg, |image/*'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Upload Custom Design File</label>
          <input
            type='file'
            className='input'
            required
            accept='.jpg, .png, .jpeg, |image/*'
          />
        </div>
        <div className='flex justify-end lg:col-span-2'>
          <Button>Save</Button>
        </div>
      </form>
    )
  } else {
    return (
      <div className='grid gap-3 lg:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <label>Product Size</label>
          {customizedData?.size}
        </div>
        <div className='flex flex-col gap-2'>
          <label>Product Quality</label>
          {customizedData?.quality}
        </div>
        <div className='flex flex-col gap-2'>
          <label>Finishing Option</label>
          {customizedData?.optional
            ? options?.find((item) => item?._id === customizedData?.optional)
                ?.name
            : 'None'}
        </div>
        <div className='flex flex-col gap-2'>
          <label>Product Quantity</label>
          {customizedData?.quantity}
        </div>
        <div className='mt-3 flex justify-between lg:col-span-2'>
          <Button
            onClick={() => {
              if (getShippingInfo()) {
                saveToCart(customizedData)
                router.push('/')
              } else {
                alert('Please add shipping info before proceed to next step.')
              }
            }}
          >
            Continue Shopping
          </Button>
          <Button
            onClick={() => {
              if (getShippingInfo()) {
                saveToCart(customizedData)
                router.push('/cart/checkout')
              } else {
                alert('Please add shipping info before proceed to next step.')
              }
            }}
          >
            Proceed Checkout
          </Button>
        </div>
      </div>
    )
  }
}

export default CustomizeProducts
