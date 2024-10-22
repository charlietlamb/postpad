import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function IndexHeroActions() {
  return (
    <div className="flex gap-4">
      <Link href="/dashboard">
        <Button
          className="card-wrapper text-theme-bg px-0 hover:scale-105 transition-all duration-300"
          size="lg"
        >
          <span className="relative z-20 inset-0 w-full h-full flex items-center justify-center px-8">
            Get Started
          </span>
          <div className="card-content" />
        </Button>
      </Link>
      <Button
        variant="white"
        size="lg"
        className="hover:scale-105 transition-all duration-300"
      >
        Learn More
      </Button>
    </div>
  )
}
