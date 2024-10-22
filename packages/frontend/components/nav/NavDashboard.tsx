import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function NavDashboard() {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.push('/dashboard')}
      className="text-xl"
      variant="primary"
    >
      Dashboard
    </Button>
  )
}
