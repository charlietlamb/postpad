import Auth from '@/components/auth/Auth'
import Nav from '@/components/nav/Nav'
import useAuth from '@/hooks/use-auth'

export default async function page() {
  const session = await useAuth(true)
  return (
    <>
      <Nav />
      <div className="p-8">
        <Auth />
      </div>
    </>
  )
}
