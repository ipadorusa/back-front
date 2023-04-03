import React, { useState } from 'react'
import { usePageNation } from '@/src/hooks/usePages'
import Button from '@/src/components/atom/Button'
import BoardImgList from './boardImageList'

export default function BoardList() {
  const [page, setPage] = useState(1)
  const { isLoading, data } = usePageNation(page)
  const handleEvt = (evtName, arr) => {
    if (evtName === 'prevBtn') setPage((old) => Math.max(old - 1, 0))
    if (evtName === 'pageNumber') setPage(arr)
    if (evtName === 'nextBtn') setPage((old) => old + 1)
  }

  return (
    <section>
      <h3>boardlist</h3>
      <BoardImgList data={data} isLoading={isLoading} />
      <Button
        type="button"
        className={['page__btn', 'page__btn__prev']}
        onClick={() => handleEvt('prevBtn')}
        disabled={page === 1}
      >
        이전
      </Button>

      {Array.from({ length: 10 }, (_, i) => i + 1).map((arr, idx) => (
        <Button
          type={'button'}
          key={idx}
          className={page === arr ? ['page__btn', '--active'] : 'page__btn'}
          onClick={() => handleEvt('pageNumber', arr)}
        >
          {arr}
        </Button>
      ))}
      <Button
        type="button"
        className={['page__btn', 'page__btn__next']}
        onClick={() => handleEvt('nextBtn')}
        disabled={page === 10}
      >
        다음
      </Button>
    </section>
  )
}
