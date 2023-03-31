import { useState } from 'react'
import { useTodos } from '@/src/hooks'

function LunchMenu() {
  return (
    <>
      <h3>LunchMenu</h3>
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
      <LunchMenu />
      <TodoForm />
    </>
  )
}
