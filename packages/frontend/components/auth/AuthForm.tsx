'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/hooks/use-toast'
import { FaGithub } from 'react-icons/fa'
import Spinner from '../misc/Spinner'
import { Sparkles } from 'lucide-react'
import { signInAction } from './actions'

export const userAuthSchema = z.object({
  email: z.string().email(),
})

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export default function AuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)

  async function onSubmit(formData: FormData) {
    setIsLoading(true)

    await signInAction('resend', formData)
    setIsLoading(false)

    return toast({
      title: 'Check your email',
      description: 'We sent you a login link. Be sure to check your spam too.',
    })
  }

  return (
    <div className={cn('grid gap-6 font-geist', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button className="font-geist" disabled={isLoading}>
            {isLoading && <Spinner />}
            Sign In with Email
          </Button>
        </div>
        <div className="bg-zinc-100 text-zinc-500 gap-2 flex items-center justify-center p-2 rounded-lg mt-4">
          <Sparkles />
          <p>You'll receive a link for a password free log in.</p>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        type="button"
        variant="outline"
        className="font-geist"
        onClick={() => {
          setIsGitHubLoading(true)
          signInAction('github')
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? <Spinner /> : <FaGithub className="h-4 w-4" />}{' '}
        Github
      </Button>
    </div>
  )
}
