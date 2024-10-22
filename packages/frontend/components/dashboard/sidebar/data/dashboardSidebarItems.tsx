import { BarChart, Calendar, Home, Link, Upload } from 'lucide-react'

export const dashboardSidebarItems = [
  {
    title: 'Home',
    icon: <Home />,
    href: '/dashboard',
  },
  {
    title: 'Upload',
    icon: <Upload />,
    href: '/dashboard/upload',
  },
  {
    title: 'Connect',
    icon: <Link />,
    href: '/dashboard/connect',
  },
  {
    title: 'Schedule',
    icon: <Calendar />,
    href: '/dashboard/schedule',
  },
  {
    title: 'Analytics',
    icon: <BarChart />,
    href: '/dashboard/analytics',
  },
]

export type DashboardSidebarItem = (typeof dashboardSidebarItems)[number]
