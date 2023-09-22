import signale from 'signale'

const { Signale } = signale

export class Logger extends Signale {
  constructor(options?: object) {
    super(options)
  }
}
