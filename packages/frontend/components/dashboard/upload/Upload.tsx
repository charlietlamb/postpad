import React from 'react'
import DashboardTitle from '../title/DashboardTitle'
import UploadFile from './UploadFile'

export default function Upload() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardTitle title="Upload" description="Upload your files here" />
      <UploadFile />
    </div>
  )
}
