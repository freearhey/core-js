import signale, { SignaleOptions } from 'signale'
import treeify from 'object-treeify'

const { Signale } = signale

export class Logger extends Signale {
  constructor(options?: SignaleOptions) {
    super(options)
  }

  tree(object: object) {
    const output = treeify(object, {
      spacerNeighbour: '  ',
      keyNoNeighbour: '  ',
      keyNeighbour: '  '
    })

    this.info(output)
  }
}
