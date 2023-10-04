'use client'
import Hero from '@/components/others/home/Hero'
import ProductCard from '@/components/others/products/ProductCard'
import useProducts from '@/hooks/useProducts'
import { ProductType } from '@/interfaces/product.interface'

const HomePage = () => {
  const { data, isLoading } = useProducts('/products')

  console.log(data)
  return (
    <>
      <Hero />
      <section id='products' className='container grid lg:grid-cols-3 xl:grid-cols-4 gap-5 py-20'>
        {data &&
          data.map((item: ProductType) => (
            <ProductCard key={item._id} product={item} />
          ))}
      </section>
    </>
  )
}

export default HomePage
