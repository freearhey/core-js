import { Timer } from '../src'

describe('timer', () => {
  it('can return list of variables', async () => {
    const timer = new Timer()
    timer.start()
    await new Promise(r => setTimeout(r, 500))

    const number = parseInt(timer.format('SSS'))
    expect(number >= 500).toEqual(true)
    expect(number < 600).toEqual(true)
  })

  it('can format result', async () => {
    const timer = new Timer()
    timer.start()
    await new Promise(r => setTimeout(r, 0))

    expect(timer.format('HH[h] mm[m]')).toEqual('00h 00m')
  })
})
