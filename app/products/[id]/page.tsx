'use client'

import loadingSpinner from '@/assets/loading.svg'
import ShippingInfo from '@/components/others/checkout/ShippingInfo'
import CustomizeProducts from '@/components/others/products/CustomizeProducts'
import ProductsDetails from '@/components/others/products/ProductsDetails'
import useProducts from '@/hooks/useProducts'
import { ProductType } from '@/interfaces/product.interface'
import Image from 'next/image'
import { useMemo } from 'react'

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useProducts(`/products/${params.id}`)
  // Handle cpu intensive data calculations
  const product: ProductType = useMemo(() => {
    if (data) {
      return data
    }
    return null
  }, [data])

  if (product && !isLoading) {
    return (
      <div className='container flex flex-col gap-10 py-28 lg:grid lg:grid-cols-3'>
        <div className='flex flex-col gap-5'>
          <ProductsDetails details={product} />
        </div>
        <div className='flex flex-col gap-10 text-lg lg:col-span-2'>
          <div>
            <h3 className='mb-2 border-b pb-1 text-xl uppercase'>
              Customize Product
            </h3>
            <CustomizeProducts options={product?.optional} product={product} />
          </div>
          <div>
            <h3 className='mb-2 border-b pb-1 text-xl uppercase'>
              Shipping Info
            </h3>
            <ShippingInfo />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <Image src={loadingSpinner} alt='Spinner' className='h-52' priority />
      </div>
    )
  }
}

export default ProductPage
