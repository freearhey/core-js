import { Timer as TimerNode, TimerOptions, Time } from 'timer-node'
import duration from 'dayjs/plugin/duration.js'
import dayjs from 'dayjs'

dayjs.extend(duration)

export class Timer {
  timer: TimerNode

  constructor(options?: TimerOptions) {
    this.timer = new TimerNode(options)
  }

  start(): this {
    this.timer.start()

    return this
  }

  pause(): this {
    this.timer.pause()

    return this
  }

  resume(): this {
    this.timer.resume()

    return this
  }

  stop(): this {
    this.timer.stop()

    return this
  }

  ms(): number {
    return this.timer.ms()
  }

  time(): Time {
    return this.timer.time()
  }

  format(format: string): string {
    const ms = this.timer.ms()

    return dayjs.duration(ms).format(format)
  }
}
