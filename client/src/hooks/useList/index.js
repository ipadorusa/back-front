import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const fetchList = () => axios.get(`http://localhost:3001/list`)

const useList = (onSuccess, onError) => {
  return useQuery({
    queryKey: ['list'],
    queryFn: () => fetchList(),
    onSuccess,
    onError
  })
}
const addList = (item) => {
  return axios.post(`http://localhost:3001/list`, item)
}

const useAddList = () => {
  const queryClient = useQueryClient()
  return useMutation(addList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list'])
    }
  })
}

export { useList, fetchList, useAddList }
