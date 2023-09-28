import { Logger } from '../src'

describe('logger', () => {
  it('can create instance of Signale', () => {
    const logger = new Logger()

    expect(logger).toBeInstanceOf(Logger)
  })

  it('can display message', () => {
    process.stdout.write = jest.fn()
    const logger = new Logger()

    logger.info('await')
    logger.info('complete')
    logger.info('debug')
    logger.info('fatal')
    logger.info('fav')
    logger.info('note')
    logger.info('pause')
    logger.info('pending')
    logger.info('star')
    logger.info('warn')
    logger.info('watch')
    logger.info('log')
    logger.info('info')
    logger.info('error')
    logger.info('start')
    logger.info('success')

    expect(process.stdout.write).toHaveBeenCalledWith('await\n')
    expect(process.stdout.write).toHaveBeenCalledWith('complete\n')
    expect(process.stdout.write).toHaveBeenCalledWith('debug\n')
    expect(process.stdout.write).toHaveBeenCalledWith('fatal\n')
    expect(process.stdout.write).toHaveBeenCalledWith('fav\n')
    expect(process.stdout.write).toHaveBeenCalledWith('note\n')
    expect(process.stdout.write).toHaveBeenCalledWith('pause\n')
    expect(process.stdout.write).toHaveBeenCalledWith('pending\n')
    expect(process.stdout.write).toHaveBeenCalledWith('star\n')
    expect(process.stdout.write).toHaveBeenCalledWith('warn\n')
    expect(process.stdout.write).toHaveBeenCalledWith('watch\n')
    expect(process.stdout.write).toHaveBeenCalledWith('log\n')
    expect(process.stdout.write).toHaveBeenCalledWith('info\n')
    expect(process.stdout.write).toHaveBeenCalledWith('error\n')
    expect(process.stdout.write).toHaveBeenCalledWith('start\n')
    expect(process.stdout.write).toHaveBeenCalledWith('success\n')
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
