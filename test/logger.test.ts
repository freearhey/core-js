import { Logger } from '../src'
import signale from 'signale'

const { Signale } = signale

describe('logger', () => {
  it('can create instance of Signale', () => {
    const logger = new Logger()

    expect(logger).toBeInstanceOf(Signale)
  })
})
