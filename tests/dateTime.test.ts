import { describe, it, expect } from 'vitest'
import { DateTime } from '../src'
import dayjs from 'dayjs'

describe('date', () => {
  it('can create new date from string', () => {
    const date = new DateTime('2016-05-25T09:24:15.123Z')

    expect(date._dt).toBeInstanceOf(dayjs)
    expect(date._dt.toJSON()).toBe('2016-05-25T09:24:15.123Z')
  })

  it('can create new date from JS Date', () => {
    const date = new DateTime(new Date())

    expect(date._dt).toBeInstanceOf(dayjs)
  })

  it('can create new date with UTC timezone', () => {
    const date = new DateTime('2023-01-01', { timezone: 'UTC' })

    expect(date._dt.toJSON()).toEqual('2023-01-01T00:00:00.000Z')
  })

  it('can return utc time', () => {
    const date = new DateTime('2021-05-16T16:03:44', { timezone: 'Europe/Moscow' })

    expect(date.utc().toJSON()).toEqual('2021-05-16T13:03:44.000Z')
  })

  it('can change timezone', () => {
    const date = new DateTime('2021-05-16T16:03:44', { timezone: 'Europe/Moscow' })

    expect(date.tz('Europe/London').toJSON()).toEqual('2021-05-16T13:03:44.000Z')
  })

  it('can format date', () => {
    const date = new DateTime('2021-05-16T16:03:44+06:00')

    expect(date.format('MMM D, YYYY [foo]')).toEqual('May 16, 2021 foo')
  })

  it('can add days to the date', () => {
    const date = new DateTime('2021-05-16T16:03:44+06:00')

    expect(date.add(2, 'd').toJSON()).toEqual('2021-05-18T10:03:44.000Z')
    expect(date.add(2, 'days').toJSON()).toEqual('2021-05-18T10:03:44.000Z')
    expect(date.add(2, 'day').toJSON()).toEqual('2021-05-18T10:03:44.000Z')
  })

  it('can subtract days from the date', () => {
    const date = new DateTime('2021-05-16T16:03:44+06:00')

    expect(date.subtract(2, 'd').toJSON()).toEqual('2021-05-14T10:03:44.000Z')
    expect(date.subtract(2, 'days').toJSON()).toEqual('2021-05-14T10:03:44.000Z')
    expect(date.subtract(2, 'day').toJSON()).toEqual('2021-05-14T10:03:44.000Z')
  })
})
