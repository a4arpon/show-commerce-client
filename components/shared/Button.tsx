import { buttonProps } from '@/interfaces/shared.interface'
import twClassName from '@/lib/cn'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

export const buttonVariants = cva(
  'flex text-light justify-center gap-2 items-center py-2 rounded-md duration-150 ease-in-out transition font-semibold uppercase font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-dark hover:bg-gradient-to-tr from-dark to-light/10',
        light: 'bg-light text-dark hover:bg-light/90',
        ghost: 'hover:bg-dark/10 text-dark',
        'no-bg': 'bg-opacity-0 text-dark',
        warn: 'bg-warn text-dark hover:bg-warn/90',
      },
      fontSize: {
        sm: 'text-base',
        md: 'text-lg',
      },
      rounded: {
        md: 'rounded',
        full: 'rounded-full',
      },
      scale: {
        in: 'active:scale-95',
        out: 'active:scale-105',
      },
      width: {
        full: 'w-full',
        fit: 'w-fit px-6',
        'fit-4': 'w-fit px-4',
        'fit-no-pad': 'w-fit',
        'fit-2': 'w-fit p-2',
      },
    },

    defaultVariants: {
      variant: 'primary',
      fontSize: 'sm',
      rounded: 'md',
      scale: 'in',
      width: 'fit',
    },
  }
)

const Button: React.FC<buttonProps> = ({
  children,
  variant,
  fontSize,
  disabled,
  onClick,
  link,
  target,
  rounded,
  scale,
  width,
}) => {
  if (!link) {
    return (
      <button
        className={twClassName(
          buttonVariants({
            variant,
            fontSize,
            rounded,
            scale,
            width,
          })
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  } else {
    return (
      <Link
        className={twClassName(
          buttonVariants({
            variant,
            fontSize,
            rounded,
            scale,
            width,
          })
        )}
        href={link}
        target={target}
      >
        {children}
      </Link>
    )
  }
}

export default Button
