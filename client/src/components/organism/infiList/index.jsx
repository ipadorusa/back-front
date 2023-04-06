import { useState } from 'react'
import { useInfinity } from '@/src/hooks/useInfinity'
import classNames from 'classnames/bind'
import style from './infinify.module.scss'
const cx = classNames.bind(style)

const InfinityCard = () => {
  const [page, SetPage] = useState(1)
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage
  } = useInfinity(page)
  return (
    <div>
      {data?.map((item) => (
        <div key={item.createdAt} className={cx('box')}>
          {item.userId}
          <br />
          {item.createdAt}
          <br />
          <p>{item.name}</p>
        </div>
      ))}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load Newer'
          : 'Nothing more to load'}
      </button>
    </div>
  )
}

export default InfinityCard
