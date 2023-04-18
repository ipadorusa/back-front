import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const fetchPageNation = async (page = 1) => {
  const a = await fetch(`http://localhost:3001/board?_page=${page}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return a
}

const usePageNation = (page) => {
  return useQuery({
    queryKey: ['pageNation', page],
    queryFn: () => fetchPageNation(page),
    keepPreviousData: true,
    staleTime: 60 * 1000,
    cacheTime: 60 * 1000
  })
}

const delList = (id) => {
  return axios.delete(`http://localhost:3001/board/${id}`)
}

const usePageDeleteList = (id) => {
  const queryClient = useQueryClient()
  return useMutation((id) => delList(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['pageNation'])
    }
  })
}


export { usePageNation, fetchPageNation, usePageDeleteList }
