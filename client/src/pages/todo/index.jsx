import { useState } from 'react'
import { useTodos } from '@/src/hooks'

function TodoList() {
  const [postCount, setPostCount] = useState(10)
  const { data, isLoading, isError } = useTodos(postCount)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching todos</div>
  }
  return (
    <>
      <h3>TodoList</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}
function TodoForm() {
  return (
    <form>
      <input type="text" />
      <button type="button">Add Todo</button>
    </form>
  )
}

export default function Page() {
  return (
    <>
      <TodoList />
      <TodoForm />
    </>
  )
}
