import Button from '@/components/shared/Button'
import { productType } from '@/interfaces/product.interface'
import Image from 'next/image'
import { BsTools } from 'react-icons/bs'

const ProductCard = ({ product }: { product: productType }) => {
  return (
    <div className='group rounded border-2 border-dark/20 bg-dark/5 shadow'>
      <div className='h-96 w-full overflow-hidden rounded'>
        <Image
          src={product.photoUrl}
          alt={product.photoUrl + 'Image Form Website'}
          width={500}
          height={750}
          className='h-full w-full rounded object-cover object-center duration-300 ease-in-out group-hover:scale-105'
        />
      </div>
      <div className='flex flex-col gap-2 p-3 pt-8 overflow-hidden'>
        <h2 className='text-xl uppercase'>{product.name}</h2>
        <p>Price: {product.price}$</p>
        <div className='flex justify-end mt-auto'>
          <Button width='fit-4' link={`/products/${product._id}`}>
            <span>Customize</span>
            <BsTools />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
