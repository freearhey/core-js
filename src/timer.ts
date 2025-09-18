import { Timer as TimerNode, TimerOptions, Time } from 'timer-node'
import duration from 'dayjs/plugin/duration.js'
import dayjs from 'dayjs'

dayjs.extend(duration)

export class Timer {
  #timer: TimerNode

  constructor(options?: TimerOptions) {
    this.#timer = new TimerNode(options)
  }

  /** Starts the timer */
  start(): this {
    this.#timer.start()

    return this
  }

  /** Pauses the timer */
  pause(): this {
    this.#timer.pause()

    return this
  }

  /** Resumes the timer */
  resume(): this {
    this.#timer.resume()

    return this
  }

  /** Stops the timer */
  stop(): this {
    this.#timer.stop()

    return this
  }

  /** Returns the elapsed time in milliseconds */
  ms(): number {
    return this.#timer.ms()
  }

  /** Returns an object of time fractions (`d`, `h`, `m`, `s`, `ms`) */
  time(): Time {
    return this.#timer.time()
  }

  /** Formats the elapsed time using placeholders (`HH`, `mm`, `ss`, `ms`, etc.) */
  format(format: string): string {
    const ms = this.#timer.ms()

    return dayjs.duration(ms).format(format)
  }
}
