import client from '@/client'

export async function getConnectAccounts(platform: string) {
  const accounts = await client.connects[':userId'].$get({
    param: { userId: 'bf6c21ef-9481-448a-9f4e-2085bc11accc' },
  })
  return accounts
}
