'use client'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useIsMobile } from '@/hooks/use-mobile'

export default function DashboardSidebarToggle() {
  const mobile = useIsMobile()
  if (!mobile) return null

  return <SidebarTrigger />
}
