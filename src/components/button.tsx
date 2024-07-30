import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

import { cn } from '~/lib/utils'

type ButtonProps = ComponentProps<'button'> & {
  icon: LucideIcon
}

export function Button({ icon, className, ...props }: ButtonProps) {
  const Icon = icon

  return (
    <button
      className={cn(
        'flex size-8 items-center justify-center rounded-xl bg-indigo-200 transition',
        'hover:bg-indigo-300 focus:outline-none active:bg-indigo-300/80',
        className
      )}
      type="button"
      {...props}
    >
      <Icon size={20} />
    </button>
  )
}
