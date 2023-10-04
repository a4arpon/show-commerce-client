'use client'

import loadingSpinner from '@/assets/loading.svg'
import Hero from '@/components/others/home/Hero'
import ProductCard from '@/components/others/products/ProductCard'
import useProducts from '@/hooks/useProducts'
import { ProductType } from '@/interfaces/product.interface'
import Image from 'next/image'

const HomePage = () => {
  const { data, isLoading } = useProducts('/products')

  return (
    <>
      <Hero />
      {!isLoading && data ? (
        <section
          id='products'
          className='container grid gap-2 py-20 lg:grid-cols-3 xl:grid-cols-4'
        >
          {data &&
            data.map((item: ProductType) => (
              <ProductCard key={item._id} product={item} />
            ))}
        </section>
      ) : (
        <section className='my-20 flex h-96 items-center justify-center'>
          <Image src={loadingSpinner} alt='Spinner' className='h-52' priority />
        </section>
      )}
    </>
  )
}

export default HomePage
