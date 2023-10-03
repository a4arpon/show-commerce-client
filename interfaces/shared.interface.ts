import { buttonVariants } from '@/components/shared/Button'
import { VariantProps } from 'class-variance-authority'

export interface Children {
  children: React.ReactNode
}

export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof buttonVariants> {
  link?: string
  target?: string
}
