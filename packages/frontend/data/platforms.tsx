import { AiFillInstagram } from 'react-icons/ai'
export const platforms = [
  {
    name: 'instagram' as PlatformName,
    icon: <AiFillInstagram />,
    postTypes: ['image', 'video'],
  },
]

export const PLATFORM_NAMES = ['instagram'] as const
export type PlatformName = (typeof PLATFORM_NAMES)[number]

export type Platform = (typeof platforms)[number]
