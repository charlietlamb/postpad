import TanstackQueryProvider from './TanstackQueryProvider'
import ThemeProvider from './ThemeProvider'

export default function Providers({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <TanstackQueryProvider>
      <body className={className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </TanstackQueryProvider>
  )
}
