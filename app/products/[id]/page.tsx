'use client'

import useProducts from '@/hooks/useProducts'
import Image from 'next/image'

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useProducts(`/products/${params.id}`)

  return (
    <div className='grid grid-cols-5 py-28'>
      <div className='col-span-2'>
        <Image src={data?.photoUrl} alt={data?.name} width={640} height={720} />
      </div>
      <div className='col-span-3'>
        <h1 className='text-3xl'>{data?.name}</h1>
      </div>
    </div>
  )
}

export default ProductPage
