import { useState } from 'react'
export default function AboutList({ props }) {
  const [postCount, setPostCount] = useState(10)
  const { data, isFetching } = props
  console.log(data)
  return (
    <section>
      <h3>list</h3>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
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
