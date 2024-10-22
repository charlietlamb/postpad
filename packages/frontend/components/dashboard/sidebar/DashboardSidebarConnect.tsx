import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { ChevronRight, LinkIcon } from 'lucide-react'
import { getIconWithClassName } from './functions/getIconWithClassName'

const item = {
  title: 'Connect',
  icon: <LinkIcon />,
  isActive: false,
  items: [
    {
      title: 'Instagram',
      url: '/dashboard/connect/instagram',
    },
    {
      title: 'TikTok',
      url: '/dashboard/connect/tiktok',
    },
    {
      title: 'Twitter',
      url: '/dashboard/connect/twitter',
    },
  ],
}
export default function DashboardSidebarConnect() {
  const iconWithClassName = getIconWithClassName(item.icon, 'min-w-4 min-h-4')
  return (
    <Collapsible
      asChild
      defaultOpen={item.isActive}
      className="group/collapsible list-none"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title}>
            {iconWithClassName}
            <span className="text-lg">{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton asChild>
                  <a href={subItem.url}>
                    <span>{subItem.title}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}
