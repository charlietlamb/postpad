import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function useAuth(invert = false) {
  const session = await auth()
  if (!session && !invert) {
    return redirect('/login')
  } else if (session && invert) {
    return redirect('/dashboard')
  }
  return session
}
