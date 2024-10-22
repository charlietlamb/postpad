import client from '@/client'

export async function getConnectAccounts(platform: string) {
  const accounts = await client
  return accounts
}
