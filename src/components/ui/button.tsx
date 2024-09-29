import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

import { cn } from '~/lib/utils'

const button = cva(
  [
    'flex items-center justify-center rounded-xl text-white transition focus:outline-none',
  ],
  {
    variants: {
      variant: {
        default: 'bg-gray-500 hover:bg-gray-600 active:bg-gray-600/80',
        primary: 'bg-indigo-500 hover:bg-indigo-300 active:bg-indigo-300/80',
        destructive: 'bg-red-500 hover:bg-red-600 active:bg-red-600/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    icon?: LucideIcon
  }

export function Button({
  variant,
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const Icon = icon ?? (() => null)

  return (
    <button
      className={cn(button({ variant, className }))}
      type="button"
      {...props}
    >
      <Icon size={20} />
      {children}
    </button>
  )
}
