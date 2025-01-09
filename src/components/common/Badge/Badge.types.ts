import { HTMLAttributes } from 'react'

export type BadgeVariant = 'primary' | 'secondary' | 'danger'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant
    icon?: React.ReactNode
    children?: React.ReactNode
}