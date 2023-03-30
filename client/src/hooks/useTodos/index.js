import { useQuery } from '@tanstack/react-query'

const fetchTodos = async (limit = 10) => {
  const parsed = await fetch('http://localhost:3001/todos')
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return parsed.filter((x) => x.id <= limit)
}

const useTodos = (limit) => {
  return useQuery({
    queryKey: ['todos', limit],
    queryFn: () => fetchTodos(limit),
    staleTime: 60 * 1000,
    cacheTime: 60 * 1000
  })
}

export { useTodos, fetchTodos }
