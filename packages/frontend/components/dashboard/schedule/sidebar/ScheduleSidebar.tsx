'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarRail,
} from '@/components/ui/sidebar'
import ScheduleSidebarCalendar from './ScheduleSidebarCalendar'
import ScheduleSidebarHeader from './ScheduleSidebarHeader'
import { useAtom } from 'jotai'
import { scheduleSidebarAtom } from '@/atoms/dashboard/schedule/scheduleSidebarAtom'

export default function ScheduleSidebar() {
  const [open, setOpen] = useAtom(scheduleSidebarAtom)
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '17rem',
          '--sidebar-width-mobile': '20rem',
        } as React.CSSProperties
      }
      open={open}
      onOpenChange={setOpen}
    >
      <Sidebar side="right">
        <ScheduleSidebarHeader />
        <SidebarContent>
          <ScheduleSidebarCalendar />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  )
}
