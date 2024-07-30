import { Minus, Plus } from 'lucide-react'

import { Button } from '~/components/button'

type CounterProps = {
  counter: number
  increment: () => void
  decrement: () => void
}

export function Counter({ counter, increment, decrement }: CounterProps) {
  return (
    <div className="grid h-20 w-48 grid-cols-[2rem_1fr_2rem] items-center justify-center rounded-3xl bg-white px-6 shadow-xl">
      <Button icon={Minus} onClick={decrement} />
      <p className="select-none text-center text-2xl">{counter}</p>
      <Button icon={Plus} onClick={increment} />
    </div>
  )
}
