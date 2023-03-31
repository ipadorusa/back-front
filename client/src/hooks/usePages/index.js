import { useQuery } from '@tanstack/react-query'

const fetchPageNation = async (page = 1) => {
  const a = await fetch(`http://localhost:3001/todos?_page=${page}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return a
}

const usePageNation = (page) => {
  return useQuery({
    queryKey: ['pageNation', page],
    queryFn: () => fetchPageNation(page)
  })
}

export { usePageNation, fetchPageNation }
