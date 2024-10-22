import {
  DropdownMenuContent,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import React from 'react'
import DashboardSidebarFooterLabel from './DashboardSidebarFooterLabel'
import DashboardSidebarFooterDropdown from './DashboardSidebarFooterDropdown'

export default function DashboardSidebarFooterMenu() {
  return (
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      side="bottom"
      align="end"
      sideOffset={4}
    >
      <DashboardSidebarFooterLabel />
      <DropdownMenuSeparator />
      <DashboardSidebarFooterDropdown />
    </DropdownMenuContent>
  )
}
