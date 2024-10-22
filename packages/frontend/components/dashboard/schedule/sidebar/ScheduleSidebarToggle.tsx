import { scheduleSidebarAtom } from '@/atoms/dashboard/schedule/scheduleSidebarAtom'
import { Button } from '@/components/ui/button'
import { useAtom } from 'jotai'
import { CalendarIcon } from 'lucide-react'

export default function ScheduleSidebarToggle() {
  const [open, setOpen] = useAtom(scheduleSidebarAtom)
  return (
    <Button
      variant="outline"
      className="ml-auto border-none"
      onClick={() => setOpen(!open)}
    >
      <CalendarIcon />
    </Button>
  )
}
