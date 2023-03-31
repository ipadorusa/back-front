import React, { Suspense, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPageNation } from '@/src/hooks/usePages'
import Button from '../../atom/Button'

export default function BoardList() {
  const [page, setPage] = useState(1)
  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery({
    queryKey: ['boardList', page],
    queryFn: () => fetchPageNation(page),
    keepPreviousData: true,
    staleTime: 60 * 1000,
    cacheTime: 60 * 1000
  })
  const handleEvt = (e) => {
    setPage(e.target.dataset.idx)
  }
  if (isLoading) return <p>Loading users...</p>
  return (
    <section>
      <h3>boardlist</h3>
      <div>
        {data?.map((item) => (
          <div key={item.id}>
            {item.id} {item.title}
          </div>
        ))}
      </div>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((arr, idx) => (
        <Button event={handleEvt} label={arr} key={idx} btnClass={'page__btn'} />
      ))}
    </section>
  )
}
