import React from 'react'
import DashboardTitle from '../title/DashboardTitle'
import ConnectContent from './ConnectContent'

export default function Connect() {
  return (
    <div className="w-full flex flex-col gap-4">
      <DashboardTitle title="Connect" description="Connect your accounts" />
      <ConnectContent />
    </div>
  )
}
