import { X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '~/components/ui/button'
import { Counter } from '~/components/ui/counter'
import { addCounter, decrement, increment, removeCounter } from '~/slices/counter'
import type { AppDispatch, RootState } from '~/store'

export function CounterList() {
  const counters = useSelector((state: RootState) => state.counter)
  const dispatch: AppDispatch = useDispatch()

  const handleAddCounter = () => dispatch(addCounter())
  const handleRemoveCounter = (index: number) => dispatch(removeCounter(index))
  const handleDecrement = (index: number) => dispatch(decrement(index))
  const handleIncrement = (index: number) => dispatch(increment(index))

  return (
    <div className="flex flex-col gap-4">
      <Button className="h-10 w-48 px-4" onClick={handleAddCounter}>
        Add Counter
      </Button>
      {counters.map((counter, index) => (
        <div className="relative" key={index}>
          <Counter
            counter={counter}
            onDecrement={() => handleDecrement(index)}
            onIncrement={() => handleIncrement(index)}
          />
          <Button
            className="absolute -right-2 -top-1 size-6"
            icon={X}
            onClick={() => handleRemoveCounter(index)}
            variant="destructive"
          />
        </div>
      ))}
    </div>
  )
}
