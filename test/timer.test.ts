import { describe, it, expect } from 'vitest'
import { Timer } from '../dist'

describe('timer', () => {
  it('can return list of variables', async () => {
    const timer = new Timer()
    timer.start()
    await new Promise(r => setTimeout(r, 200))

    const number = parseInt(timer.format('SSS'))
    expect(number >= 200).toEqual(true)
    expect(number < 300).toEqual(true)
  })

  it('can format result', async () => {
    const timer = new Timer()
    timer.start()
    await new Promise(r => setTimeout(r, 0))

    expect(timer.format('HH[h] mm[m]')).toEqual('00h 00m')
  })
})
