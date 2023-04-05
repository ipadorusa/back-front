import { useQuery } from '@tanstack/react-query'

const fetchInfinity = async (page = 1) => {
  const a = await fetch(`http://localhost:3001/board?_page=${page}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return a
}

const useInfinity = (page) => {
  return useQuery({
    queryKey: ['card', page],
    queryFn: () => fetchInfinity(page),
    keepPreviousData: true,
    staleTime: 60 * 1000,
    cacheTime: 60 * 1000
  })
}

export { useInfinity, fetchInfinity }
