import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '~/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost'
  size?: 'default' | 'icon'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'default',
            'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
            'h-10 px-4 py-2': size === 'default',
            'h-9 w-9 p-0': size === 'icon',
          },
          className
        )}
        {...props}
      />
    )
  }
) 