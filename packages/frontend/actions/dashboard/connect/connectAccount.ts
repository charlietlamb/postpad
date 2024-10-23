import { PlatformName } from '@/data/platforms'
import connectInstagramAccount from './connectInstagramAccount'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export default async function connectAccount(
  platformName: PlatformName,
  router: AppRouterInstance
) {
  switch (platformName) {
    case 'instagram':
      return await connectInstagramAccount(router)
  }
}
