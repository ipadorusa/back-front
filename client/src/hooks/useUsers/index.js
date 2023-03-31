import { useQuery } from '@tanstack/react-query'

const fetchPosts = async (limit = 10) => {
  return await fetch('http://localhost:3001/todos')
    .then((res) => res.json())
    .then((res) => res.filter((x) => x.id <= limit))
    .catch((err) => console.log(err))
}

const usePosts = (limit) => {
  return useQuery({
    queryKey: ['about', limit],
    queryFn: () => fetchPosts(limit)
  })
}

export { usePosts, fetchPosts }
