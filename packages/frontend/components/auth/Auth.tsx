import React from 'react'
import AuthForm from './AuthForm'
import AuthHeader from './AuthHeader'

export default function Auth() {
  return (
    <div className="flex flex-col gap-8 padding-main">
      <AuthHeader />
      <AuthForm />
    </div>
  )
}
