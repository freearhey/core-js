import { createConsola, ConsolaOptions } from 'consola'
import treeify from 'object-treeify'

export class Logger {
  logger: any

  constructor(options?: ConsolaOptions) {
    this.logger = createConsola(options)
  }

  tree(object: object) {
    const output = treeify(object, {
      spacerNeighbour: '',
      keyNoNeighbour: '',
      keyNeighbour: ''
    })

    console.log(output)
  }

  mockTypes(cb: () => any) {
    this.logger.mockTypes(cb)
  }

  info(...args: any) {
    this.logger.info(...args)
  }

  fail(...args: any) {
    this.logger.fail(...args)
  }

  trace(...args: any) {
    this.logger.trace(...args)
  }

  ready(...args: any) {
    this.logger.ready(...args)
  }

  debug(...args: any) {
    this.logger.debug(...args)
  }

  verbose(...args: any) {
    this.logger.verbose(...args)
  }

  star(...args: any) {
    this.logger.star(...args)
  }

  warn(...args: any) {
    this.logger.warn(...args)
  }

  log(...args: any) {
    this.logger.log(...args)
  }

  error(...args: any) {
    this.logger.error(...args)
  }

  start(...args: any) {
    this.logger.start(...args)
  }

  success(...args: any) {
    this.logger.success(...args)
  }
}
