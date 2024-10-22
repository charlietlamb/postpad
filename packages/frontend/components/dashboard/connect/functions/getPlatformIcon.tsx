import { Platform } from '@/data/platforms'
import React from 'react'

export function getPlatformIcon(platform: Platform, className?: string) {
  const Icon = React.cloneElement(platform.icon, {
    className,
  })
  return Icon
}
