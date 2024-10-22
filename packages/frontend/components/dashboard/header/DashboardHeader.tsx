import DashboardBreadcrumb from '../breadcrumb/DashboardBreadcrumb'
import DashboardSidebarToggle from '../sidebar/toggle/DashboardSidebarToggle'
import DashboardHeaderCalendarToggle from './DashboardHeaderCalendarToggle'

export default function DashboardHeader() {
  return (
    <div className="h-10 border-b flex items-center gap-2">
      <DashboardSidebarToggle />
      <DashboardBreadcrumb />
      <DashboardHeaderCalendarToggle />
    </div>
  )
}
