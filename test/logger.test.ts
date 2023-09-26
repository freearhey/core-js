import { Logger } from '../src'
import signale from 'signale'

const { Signale } = signale

describe('logger', () => {
  it('can create instance of Signale', () => {
    const logger = new Logger()

    expect(logger).toBeInstanceOf(Signale)
  })

  it('can display object as tree', () => {
    process.stdout.write = jest.fn()
    const logger = new Logger()
    logger.tree({ a: 'b', b: 'c', c: { a: 'b', b: 'c' } })

    expect(process.stdout.write).toHaveBeenCalledWith(`  a: b
  b: c
  c
     a: b
     b: c
`)
  })
})
