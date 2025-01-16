import { DateTime as Luxon, DateTimeOptions } from 'luxon'

const units: { [key: string]: string } = {
  y: 'years',
  year: 'years',
  years: 'years',
  M: 'months',
  month: 'months',
  months: 'months',
  q: 'quarters',
  quarter: 'quarters',
  quarters: 'quarters',
  w: 'weeks',
  week: 'weeks',
  weeks: 'weeks',
  d: 'days',
  day: 'days',
  days: 'days',
  m: 'minutes',
  minute: 'minutes',
  minutes: 'minutes',
  h: 'hours',
  hour: 'hours',
  hours: 'hours',
  s: 'seconds',
  second: 'seconds',
  seconds: 'seconds'
}

export class DateTime {
  _dt: Luxon

  constructor(value?: string | Date | Luxon, options?: DateTimeOptions) {
    if (value instanceof Date) {
      this._dt = Luxon.fromJSDate(value)
    } else if (value instanceof Luxon) {
      this._dt = value
    } else if (value === undefined) {
      this._dt = Luxon.now()
    } else {
      this._dt = Luxon.fromISO(value, options)
    }
  }

  utc(): DateTime {
    const date = this._dt.toUTC()

    return new DateTime(date)
  }

  toString(): string {
    return this._dt.toString()
  }

  toJSON(): string | null {
    return this._dt.toJSON()
  }

  toJSDate(): Date {
    return this._dt.toJSDate()
  }

  add(value: number = 0, unit: string): DateTime {
    const key = units[unit] || 'days'
    const date = this._dt.plus({ [key]: value })

    return new DateTime(date)
  }

  subtract(value: number = 0, unit: string): DateTime {
    const key = units[unit] || 'days'
    const date = this._dt.minus({ [key]: value })

    return new DateTime(date)
  }

  format(format: string): string {
    format = format.replace(/\[/g, "'").replace(/\]/g, "'")

    return this._dt.toFormat(format)
  }
}
