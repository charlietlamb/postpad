import { platforms } from '@/data/platforms'
import ContentPlatform from './ContentPlatform'
import { Accordion } from '@/components/ui/accordion'

export default function ConnectContent() {
  return (
    <Accordion type="multiple" className="flex flex-col gap-4">
      {platforms.map((platform) => (
        <ContentPlatform key={platform.name} platform={platform} />
      ))}
    </Accordion>
  )
}
