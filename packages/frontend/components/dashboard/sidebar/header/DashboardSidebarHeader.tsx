import { SidebarHeader } from '@/components/ui/sidebar'
import Link from 'next/link'

export default function DashboardSidebarHeader() {
  return (
    <SidebarHeader className="h-10 border-b w-full font-black">
      <Link href="/">Post Pad</Link>
    </SidebarHeader>
  )
}
