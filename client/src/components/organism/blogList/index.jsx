import React, { useState } from 'react'
import { usePosts } from '@src/hooks'
export default function BlogList() {
  const [postCount, setPostCount] = useState(10)
  const { data, isLoading, isFetching } = usePosts(postCount)

  if (isLoading) return <div>Loading</div>

  return (
    <section>
      <h3>list</h3>
      <ul>
        {data?.map((post, index) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href="#">{post.title}</a>
            </div>
          </li>
        ))}
      </ul>
      {postCount <= 90 && (
        <button onClick={() => setPostCount(postCount + 10)} disabled={isFetching}>
          {isFetching ? 'Loading...' : 'Show More'}
        </button>
      )}
    </section>
  )
}
