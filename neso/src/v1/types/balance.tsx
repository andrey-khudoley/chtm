export interface BalanceRecord {
  id: number
  uid: number
  email: string
  did: number
  dnum: number
  direction: string
  currency: string
  value: number
}

export interface TopupInput {
  uid: number
  email: string
  did: number
  dnum: number
  currency: string
  value: number
}
