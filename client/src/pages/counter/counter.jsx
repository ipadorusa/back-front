import { CounterStore } from '@/store/CounterStore'
import { shallow } from 'zustand/shallow'

export default function Counter() {
  const { increment, decrement, count, resetCounterStore } = CounterStore(
    (state) => ({
      increment: state.increment,
      decrement: state.decrement,
      count: state.count,
      resetCounterStore: state.resetCounterStore,
    }),
    shallow
  )

  return (
    <div>
      {count}
      <br />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={resetCounterStore}>RESET</button>
    </div>
  )
}
