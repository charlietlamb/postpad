import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu'
import { data } from './DashboardSidebarFooter'
export default function DashboardSidebarFooterLabel() {
  return (
    <DropdownMenuLabel className="p-0 font-normal">
      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={data.user.avatar} alt={data.user.name} />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{data.user.name}</span>
          <span className="truncate text-xs">{data.user.email}</span>
        </div>
      </div>
    </DropdownMenuLabel>
  )
}
