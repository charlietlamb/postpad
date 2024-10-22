import { AiFillInstagram } from 'react-icons/ai'
export const platforms = [
  {
    name: 'instagram',
    icon: <AiFillInstagram />,
    postTypes: ['image', 'video'],
  },
]

export type Platform = (typeof platforms)[number]
