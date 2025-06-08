import { Heap } from '@app/heap'

export const Balance = Heap.Table('balance', {
  id: Heap.Number(),
  uid: Heap.Number(),
  email: Heap.String(),
  did: Heap.Number(),
  dnum: Heap.Number(),
  direction: Heap.String(),
  currency: Heap.String(),
  value: Heap.Number(),
})
