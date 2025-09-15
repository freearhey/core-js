import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'

dayjs.extend(utc)
dayjs.extend(timezone)

export type DateTimeOptions = {
  timezone?: string
}

export class DateTime {
  _dt: dayjs.Dayjs

  constructor(value?: string | Date | dayjs.Dayjs, options: DateTimeOptions = {}) {
    if (value instanceof Date) {
      this._dt = options.timezone ? dayjs.tz(value, options.timezone) : dayjs(value)
    } else if (value instanceof dayjs) {
      this._dt = value
    } else if (value === undefined) {
      this._dt = dayjs()
    } else {
      this._dt = options.timezone ? dayjs.tz(value, options.timezone) : dayjs(value)
    }
  }

  utc(): DateTime {
    return new DateTime(this._dt.toDate(), { timezone: 'UTC' })
  }

  tz(timezone: string): this {
    this._dt = this._dt.tz(timezone)

    return this
  }

  toString(): string {
    return this._dt.toString()
  }

  toJSON(): string | null {
    return this._dt.toJSON()
  }

  toDate(): Date {
    return this._dt.toDate()
  }

  add(value: number = 0, unit?: dayjs.ManipulateType): DateTime {
    const date = this._dt.add(value, unit)

    return new DateTime(date)
  }

  subtract(value: number = 0, unit?: dayjs.ManipulateType): DateTime {
    const date = this._dt.subtract(value, unit)

    return new DateTime(date)
  }

  format(format: string): string {
    return this._dt.format(format)
  }
}
