'use client'
import Hero from '@/components/others/home/Hero'
import ProductCard from '@/components/others/products/ProductCard'
import useProducts from '@/hooks/useProducts'
import { ProductType } from '@/interfaces/product.interface'

const HomePage = () => {
  const { data, isLoading } = useProducts('/products')

  console.log('Data loading ',data)
  return (
    <>
      <Hero />
      <section
        id='products'
        className='container grid gap-5 py-20 lg:grid-cols-3 xl:grid-cols-4'
      >
        {data &&
          !isLoading &&
          data.map((item: ProductType) => (
            <ProductCard key={item._id} product={item} />
          ))}
      </section>
    </>
  )
}

export default HomePage
