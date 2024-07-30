import { useDispatch, useSelector } from 'react-redux'

import { Counter } from '~/components/counter'
import { decrement, increment } from '~/slices/counter'
import type { AppDispatch, RootState } from '~/store'

export function App() {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch: AppDispatch = useDispatch()

  const handleDecrement = () => dispatch(decrement())
  const handleIncrement = () => dispatch(increment())

  return (
    <main className="flex h-screen items-center justify-center">
      <Counter counter={counter} decrement={handleDecrement} increment={handleIncrement} />
    </main>
  )
}
