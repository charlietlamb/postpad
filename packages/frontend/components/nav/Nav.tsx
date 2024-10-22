'use client'
import NavDashboard from './NavDashboard'
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'

export default function Nav() {
  return (
    <div className="flex justify-between items-center py-4 padding-main w-full gap-4">
      <NavLogo />
      <NavMenu />
      <NavDashboard />
    </div>
  )
}
