import { cn } from '@/lib/utils'
import React from 'react'

export function getIconWithClassName(
  icon: React.ReactElement,
  className: string
) {
  return React.cloneElement(icon, {
    className: cn(icon.props.className, className),
  })
}
