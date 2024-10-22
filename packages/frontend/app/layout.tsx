import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Providers from '@/components/providers/Providers'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const baseNeue = localFont({
  src: [
    {
      path: './fonts/BaseNeue/BaseNeue-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/BaseNeue/BaseNeue-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/BaseNeue/BaseNeue-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/BaseNeue/BaseNeue-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/BaseNeue/BaseNeue-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/BaseNeue/BaseNeue-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/BaseNeue/BaseNeue-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/BaseNeue/BaseNeue-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-base-neue',
})

export const metadata: Metadata = {
  title: 'Post Pad',
  description: 'Post Pad',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${baseNeue.variable} antialiased flex flex-col min-h-screen relative`}
        >
          {children}
        </body>
      </Providers>
    </html>
  )
}
