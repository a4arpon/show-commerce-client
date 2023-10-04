import { ProductType } from '@/interfaces/product.interface'
import Image from 'next/image'

const ProductsDetails = ({ details }: { details: ProductType }) => {
  return (
    <>
      <div className='flex justify-center lg:justify-start'>
        <Image
          src={details?.photoUrl}
          alt={details?.name}
          width={500}
          height={750}
          className='h-96 w-auto rounded border-2 border-dark/20'
        />
      </div>
      <div>
        <h1 className='text-3xl font-medium'>{details?.name}</h1>
        <p className='mt-3'>Quality Grade: {details?.quality}/5</p>
        <div className='mb-1 border-b pb-1'>
          <p className='flex justify-between'>
            <span>Price:</span> <span>{details?.price}$</span>
          </p>
          <p className='flex justify-between'>
            <span>Tax Cost:</span> <span>+{details?.tax}$</span>
          </p>
        </div>
        <p className='flex justify-between font-medium'>
          <span>Total Cost:</span>{' '}
          <span>{details?.tax + details?.price}$</span>
        </p>
      </div>
      <div className='flex items relative mt-5'>
        <Image
          src={details?.rawPhoto}
          alt={details?.name}
          width={500}
          height={750}
          className='h-96 w-auto rounded border-2 border-dark/20'
        />
        <span className='absolute top-1 left-1 bg-light rounded p-1 border'>Raw Product</span>
      </div>
    </>
  )
}

export default ProductsDetails
