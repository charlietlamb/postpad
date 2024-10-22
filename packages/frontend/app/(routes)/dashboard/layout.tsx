import DashboardHeader from '@/components/dashboard/header/DashboardHeader'
import DashboardSidebar from '@/components/dashboard/sidebar/DashboardSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import useAuth from '@/hooks/use-auth'

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await useAuth()
  console.log(session)
  return (
    <SidebarProvider className="flex w-full flex-grow">
      <DashboardSidebar />
      <div className="w-full">
        <DashboardHeader />
        <div className="p-4 flex flex-col">{children}</div>
      </div>
    </SidebarProvider>
  )
}
