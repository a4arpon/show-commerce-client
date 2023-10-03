'use client'
import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const useProducts = (path: string) => {
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`,
    (url) => fetcher(url)
  )

  return { data, isLoading, error }
}

export default useProducts
