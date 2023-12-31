const fetcher = async (url: string) => {
  const response = await fetch(url, { cache: 'no-cache' })
  if (!response.ok) {
    throw new Error('An unknown error occurred.')
  }

  return response.json()
}

export default fetcher
