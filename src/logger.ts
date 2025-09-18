import { createConsola, ConsolaInstance } from 'consola'
import treeify from 'object-treeify'

export type LoggerOptions = {
  level: number
}

export class Logger {
  #logger: ConsolaInstance

  constructor(options?: LoggerOptions) {
    this.#logger = createConsola(options)
  }

  /** Outputs the object to the console as a tree structure */
  tree(object: object) {
    const output = treeify(object, {
      spacerNeighbour: '',
      keyNoNeighbour: '',
      keyNeighbour: ''
    })

    console.log(output)
  }

  mockTypes(cb: () => any) {
    this.#logger.mockTypes(cb)
  }

  info(message: any, ...args: any[]) {
    this.#logger.info(message, ...args)
  }

  fail(message: any, ...args: any[]) {
    this.#logger.fail(message, ...args)
  }

  trace(message: any, ...args: any[]) {
    this.#logger.trace(message, ...args)
  }

  ready(message: any, ...args: any[]) {
    this.#logger.ready(message, ...args)
  }

  debug(message: any, ...args: any[]) {
    this.#logger.debug(message, ...args)
  }

  verbose(message: any, ...args: any[]) {
    this.#logger.verbose(message, ...args)
  }

  warn(message: any, ...args: any[]) {
    this.#logger.warn(message, ...args)
  }

  log(message: any, ...args: any[]) {
    this.#logger.log(message, ...args)
  }

  error(message: any, ...args: any[]) {
    this.#logger.error(message, ...args)
  }

  start(message: any, ...args: any[]) {
    this.#logger.start(message, ...args)
  }

  success(message: any, ...args: any[]) {
    this.#logger.success(message, ...args)
  }
}
