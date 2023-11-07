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

const delList = (id) => {
  return axios.delete(`http://localhost:3001/list/${id}`)
}

const useAddList = () => {
  const queryClient = useQueryClient()
  return useMutation(addList, {
    onSuccess: (data) =>
      queryClient.setQueryData(['list'], (old) => {
        return {
          ...old,
          data: [...old.data, data.data]
        }
      })
    // onSuccess: () => {
    //   queryClient.invalidateQueries(['list'])
    // }
  })
}

export { useList, fetchList, useAddList, useDeleteList }
