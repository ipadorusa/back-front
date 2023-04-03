import React, { useState } from 'react'
import { usePageNation } from '@/src/hooks/usePages'
import Button from '@/src/components/atom/Button'

export default function BoardList() {
  const [page, setPage] = useState(1)
  const { isLoading, data } = usePageNation(page)
  const handleEvt = (evtName, arr) => {
    if (evtName === 'prevBtn') setPage((old) => Math.max(old - 1, 0))
    if (evtName === 'pageNumber') setPage(arr)
    if (evtName === 'nextBtn') setPage((old) => old + 1)
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
      <Button type="button" onClick={() => handleEvt('prevBtn')} disabled={page === 1}>
        PREV
      </Button>

      {Array.from({ length: 10 }, (_, i) => i + 1).map((arr, idx) => (
        <Button
          type={'button'}
          key={idx}
          className={page === arr ? ['page__btn', 'active'] : 'page__btn'}
          onClick={() => handleEvt('pageNumber', arr)}
        >
          {arr}
        </Button>
      ))}
      <Button type="button" onClick={() => handleEvt('nextBtn')} disabled={page === 10}>
        NEXT
      </Button>
    </section>
  )
}
