import NavMenuLink from './NavMenuLink'

export default function NavMenu() {
  return (
    <div className="flex gap-4 px-2 py-1.5 bg-theme-bg rounded-base text-white flex-grow">
      <NavMenuLink href="/pricing">Pricing</NavMenuLink>
      <NavMenuLink href="/login">Login</NavMenuLink>
    </div>
  )
}
