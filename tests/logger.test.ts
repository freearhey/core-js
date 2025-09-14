import { describe, it, expect, vi } from 'vitest'
import { Logger } from '../src'

describe('logger', () => {
  it('can create instance of Signale', () => {
    const logger = new Logger({ level: -999 })

    expect(logger).toBeInstanceOf(Logger)
  })

  it('can display message', () => {
    const logger = new Logger()
    const spy = vi.fn()
    logger.mockTypes(() => spy)

    logger.info('info')
    logger.ready('ready')
    logger.debug('debug')
    logger.fail('fail')
    logger.verbose('verbose')
    logger.warn('warn')
    logger.log('log')
    logger.error('error')
    logger.start('start')
    logger.trace('trace')
    logger.success('success')

    expect(spy).toHaveBeenCalledWith('info')
    expect(spy).toHaveBeenCalledWith('ready')
    expect(spy).toHaveBeenCalledWith('debug')
    expect(spy).toHaveBeenCalledWith('fail')
    expect(spy).toHaveBeenCalledWith('verbose')
    expect(spy).toHaveBeenCalledWith('warn')
    expect(spy).toHaveBeenCalledWith('log')
    expect(spy).toHaveBeenCalledWith('error')
    expect(spy).toHaveBeenCalledWith('start')
    expect(spy).toHaveBeenCalledWith('trace')
    expect(spy).toHaveBeenCalledWith('success')
  })

  it('can display object as tree', () => {
    const logger = new Logger()
    const spy = vi.spyOn(console, 'log').mockImplementation(() => undefined)

    logger.tree({ a: 'b', b: 'c', c: { a: 'b', b: 'c' } })

    expect(spy).toHaveBeenCalledWith(`a: b
b: c
c
   a: b
   b: c`)
  })
})
