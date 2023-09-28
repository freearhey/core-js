import { Signale, SignaleOptions } from 'signale'
import treeify from 'object-treeify'

export class Logger {
  logger: Signale

  constructor(options?: SignaleOptions) {
    this.logger = new Signale(options)
    this.logger.config({
      displayLabel: false,
      displayScope: false,
      displayBadge: false
    })
  }

  tree(object: object) {
    const output = treeify(object, {
      spacerNeighbour: '  ',
      keyNoNeighbour: '  ',
      keyNeighbour: '  '
    })

    this.info(output)
  }

  await(...args: any) {
    this.logger.await(...args)
  }

  complete(...args: any) {
    this.logger.complete(...args)
  }

  debug(...args: any) {
    this.logger.debug(...args)
  }

  fatal(...args: any) {
    this.logger.fatal(...args)
  }

  fav(...args: any) {
    this.logger.fav(...args)
  }

  note(...args: any) {
    this.logger.note(...args)
  }

  pause(...args: any) {
    this.logger.pause(...args)
  }

  pending(...args: any) {
    this.logger.pending(...args)
  }

  star(...args: any) {
    this.logger.star(...args)
  }

  warn(...args: any) {
    this.logger.warn(...args)
  }

  watch(...args: any) {
    this.logger.watch(...args)
  }

  log(...args: any) {
    this.logger.log(...args)
  }

  info(...args: any) {
    this.logger.info(...args)
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
