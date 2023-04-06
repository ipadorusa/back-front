import { create } from 'zustand'
import zukeeper from 'zukeeper'

const initialState = {
  count: 0
}
const CounterStore = create(
  zukeeper((set) => ({
    ...initialState,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    resetCounterStore: () => set(initialState)
  }))
)

window.store = CounterStore

export default CounterStore
