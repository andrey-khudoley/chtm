import { Balance } from '../db/balance'
import { TopupInput } from '../types/balance'

export async function topup(ctx: app.Ctx, data: TopupInput) {
  const record = await Balance.create(ctx, {
    uid: data.uid,
    email: data.email,
    did: data.did,
    dnum: data.dnum,
    direction: 'topup',
    currency: data.currency,
    value: data.value,
  })
  return record
}
