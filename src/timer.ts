import { performance } from 'perf_hooks'
import { Duration } from 'luxon'

export class Timer {
  t0 = 0

  start() {
    this.t0 = performance.now()
  }

  format(format: string) {
    format = format.replace(/\[|\]/g, "'").replace(/HH/g, 'hh')

    const milliseconds = performance.now() - this.t0

    return Duration.fromObject({ milliseconds }).toFormat(format)
  }
}
