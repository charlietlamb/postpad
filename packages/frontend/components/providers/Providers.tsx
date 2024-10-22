import TanstackQueryProvider from './TanstackQueryProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>
}
