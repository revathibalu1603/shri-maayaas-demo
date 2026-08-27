import type { ReactNode } from 'react'
import clsx from 'clsx'

export function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
}) {
  return <Tag className={clsx('mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16', className)}>{children}</Tag>
}
