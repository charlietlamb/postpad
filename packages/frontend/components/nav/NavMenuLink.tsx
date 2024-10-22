import Link from 'next/link'

export default function NavMenuLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="text-lg font-semibold font-base">
      {children}
    </Link>
  )
}
