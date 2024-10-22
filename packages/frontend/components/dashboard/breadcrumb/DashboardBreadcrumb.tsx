'use client'

import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import React from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

export default function DashboardBreadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)
  const mobile = useIsMobile()

  return (
    <Breadcrumb aria-label="breadcrumb" className={cn(!mobile && 'ml-2')}>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/')
          return (
            <React.Fragment key={href}>
              <BreadcrumbItem>
                <BreadcrumbLink href={href} className="font-bold">
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
