import { useState } from 'react'
export default function AboutList({ props }) {
  const [postCount, setPostCount] = useState(10)
  const { data } = props
  return (
    <section>
      <h3>list</h3>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  )
}
