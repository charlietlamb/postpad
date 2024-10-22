import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarRail,
} from '@/components/ui/sidebar'
import { dashboardSidebarItems } from './data/dashboardSidebarItems'
import DashboardSidebarMenuItem from './DashboardSidebarMenuItem'
import DashboardSidebarFooter from './footer/DashboardSidebarFooter'
import DashboardSidebarConnect from './DashboardSidebarConnect'
import DashboardSidebarHeader from './header/DashboardSidebarHeader'

export default function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon" className="font-base">
      <DashboardSidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          {dashboardSidebarItems.map((item) => (
            <DashboardSidebarMenuItem key={item.title} item={item} />
          ))}
        </SidebarMenu>
        <DashboardSidebarConnect />
      </SidebarContent>
      <DashboardSidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}
