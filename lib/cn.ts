import { ClassValue } from 'class-variance-authority/types'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function twClassName(...input: ClassValue[]) {
  return twMerge(clsx(input))
}


