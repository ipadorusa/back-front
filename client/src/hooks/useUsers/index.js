import { useQuery } from '@tanstack/react-query'

const fetchPosts = async (limit = 10) => {
  return await fetch('http://localhost:3001/todos')
    .then((res) => res.json())
    .then((res) => res.filter((x) => x.id <= limit))
    .catch((err) => console.log(err))

  // const parsed = await fetch('http://localhost:3001/todos/')
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err))
  // return parsed.filter((x) => x.id <= limit)
}

const usePosts = (limit) => {
  return useQuery({
    queryKey: ['posts', 10],
    queryFn: () => fetchPosts(10)
  })
}

export { usePosts, fetchPosts }
