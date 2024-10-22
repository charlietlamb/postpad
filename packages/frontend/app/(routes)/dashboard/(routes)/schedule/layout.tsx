import ScheduleSidebar from '@/components/dashboard/schedule/sidebar/ScheduleSidebar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {children}
      <ScheduleSidebar />
    </div>
  )
}
