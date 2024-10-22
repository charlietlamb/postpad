'use server'

import { signIn } from '@/auth'

export async function signInAction(
  method: string,
  formData?: { email: string }
) {
  switch (method) {
    case 'resend':
      if (!formData) {
        throw new Error('Email is required')
      }
      await signIn('resend', formData)
    default:
      await signIn(method)
  }
}
