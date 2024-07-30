import { useState } from 'react'

import { Counter } from '~/components/counter'

export function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)

  return (
    <main className="flex h-screen items-center justify-center">
      <Counter counter={counter} decrement={decrement} increment={increment} />
    </main>
  )
}
