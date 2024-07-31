import { Minus, Plus } from 'lucide-react'

import { Button } from '~/components/ui/button'

type CounterProps = {
  counter: number
  onIncrement: () => void
  onDecrement: () => void
}

export function Counter({ counter, onIncrement, onDecrement }: CounterProps) {
  return (
    <div className="grid h-20 w-48 grid-cols-[2rem_1fr_2rem] items-center justify-center rounded-3xl bg-white px-6 shadow-xl">
      <Button className="size-8" icon={Minus} onClick={onDecrement} variant="primary" />
      <p className="select-none text-center text-2xl">{counter}</p>
      <Button className="size-8" icon={Plus} onClick={onIncrement} variant="primary" />
    </div>
  )
}
