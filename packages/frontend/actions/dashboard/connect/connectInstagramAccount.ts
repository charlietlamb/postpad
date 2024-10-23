import env from '@/env'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export default async function connectInstagramAccount(
  router: AppRouterInstance
) {
  const scope =
    'business_basic,business_manage_messages,business_manage_comments,business_content_publish'
  const redirectPath = `${env.NEXT_PUBLIC_LOCATION}${env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_PATH}`
  const instagramLoginUrl = `https://www.instagram.com/oauth/authorize?client_id=${env.NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${redirectPath}&response_type=code&scope=${scope}`
  return router.push(instagramLoginUrl)
}
