import { usePathname } from 'next/navigation'

export default function useSchedule() {
  const pathname = usePathname()
  return pathname.includes('/schedule')
}
