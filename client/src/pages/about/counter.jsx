import { CounterStore } from '@/store/CounterStore'

export default function Counter() {
  const increment = CounterStore((state) => state.increment)
  const decrement = CounterStore((state) => state.decrement)
  const count = CounterStore((state) => state.count)
  return (
    <div>
      {count}
      <br />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}
