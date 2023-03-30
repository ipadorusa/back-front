import { create } from 'zustand'

const initialState = {
  count: 0,
}

export const CounterStore = create((set) => ({
  ...initialState,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  resetCounterStore: () => set(initialState),
}))
