import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'outline' | 'outline-light' | 'ghost'

const variantStyles: Record<Variant, string> = {
  primary: 'bg-burgundy text-ivory hover:bg-burgundy-deep border border-burgundy',
  outline: 'bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal hover:bg-charcoal/5',
  'outline-light': 'bg-transparent text-ivory border border-ivory/50 hover:bg-ivory/10 hover:border-ivory',
  ghost: 'bg-transparent text-burgundy hover:text-burgundy-deep border border-transparent',
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-[13px] font-sans font-medium uppercase tracking-[0.15em] transition-colors duration-300'

interface CommonProps {
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: ReactNode
}

type ConflictingEventProps = 'onAnimationStart' | 'onAnimationEnd' | 'onDrag' | 'onDragStart' | 'onDragEnd'

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | ConflictingEventProps> & { href?: undefined }

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | ConflictingEventProps> & { href: string }

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { children, variant = 'primary', className, icon, ...rest } = props
  const classes = clsx(baseStyles, variantStyles[variant], className)

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorRest } = rest as Omit<ButtonAsAnchor, keyof CommonProps>
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...anchorRest}
      >
        {children}
        {icon}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...(rest as Omit<ButtonAsButton, keyof CommonProps>)}
    >
      {children}
      {icon}
    </motion.button>
  )
}
