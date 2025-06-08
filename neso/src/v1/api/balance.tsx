import { topup } from '../balance/topup'

app.post('/topup', async (ctx: app.Ctx, req: app.Req) => {
  const { uid, email, did, dnum, currency, value } = req.body
  const record = await topup(ctx, {
    uid: Number(uid),
    email,
    did: Number(did),
    dnum: Number(dnum),
    currency,
    value: Number(value),
  })
  return record
})
