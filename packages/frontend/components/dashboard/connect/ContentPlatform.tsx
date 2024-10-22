import { Platform } from '@/data/platforms'
import { getPlatformIcon } from './functions/getPlatformIcon'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export default function ContentPlatform({ platform }: { platform: Platform }) {
  const Icon = getPlatformIcon(platform, 'w-5 h-5')
  return (
    <AccordionItem value={platform.name}>
      <AccordionTrigger className="flex justify-between items-center  bg-zinc-100 border border-zinc-200 p-4">
        <div>
          <div className="flex gap-1 items-center">
            {Icon}
            <span className="text-lg font-medium capitalize">
              {platform.name}
            </span>
          </div>
          <div className="text-sm text-zinc-500">2 Accounts connected</div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="bg-zinc-100 border border-zinc-200 p-4">
        <Button className="bg-zinc-400">Connect Another Account</Button>
      </AccordionContent>
    </AccordionItem>
  )
}
