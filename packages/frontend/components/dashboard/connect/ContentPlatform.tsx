'use client'

import { Platform } from '@/data/platforms'
import { getPlatformIcon } from './functions/getPlatformIcon'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import connectAccount from '@/actions/dashboard/connect/connectAccount'
import { useRouter } from 'next/navigation'

export default function ContentPlatform({ platform }: { platform: Platform }) {
  const Icon = getPlatformIcon(platform, 'w-5 h-5 text-theme-700')
  const router = useRouter()
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ['accounts', platform.name],
  //   queryFn: () => getConnectAccounts(platform.name),
  // })
  return (
    <AccordionItem value={platform.name}>
      <AccordionTrigger className="flex justify-between items-center bg-theme-100 border border-theme-200 p-4">
        <div>
          <div className="flex gap-1 items-center">
            {Icon}
            <span className="text-lg font-medium capitalize">
              {platform.name}
            </span>
          </div>
          <div className="text-sm text-theme-500">2 Accounts connected</div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="bg-theme-100 border border-theme-200 p-4">
        <Button
          className="bg-theme-400"
          onClick={() => connectAccount(platform.name, router)}
        >
          Connect Another Account
        </Button>
      </AccordionContent>
    </AccordionItem>
  )
}
