import { DateTime } from '../src'
import { DateTime as Luxon } from 'luxon'

describe('date', () => {
  it('can create new date from string', () => {
    const date = new DateTime('2016-05-25T09:24:15.123')

    expect(date._dt).toBeInstanceOf(Luxon)
    expect(date._dt.toJSON()).toBe('2016-05-25T09:24:15.123+12:00')
  })

  it('can create new date from JS Date', () => {
    const date = new DateTime(new Date())

    expect(date._dt).toBeInstanceOf(Luxon)
  })

  it('can create new date with UTC timezone', () => {
    const date = new DateTime('2023-01-01', { zone: 'UTC' })

    expect(date._dt.toJSON()).toEqual('2023-01-01T00:00:00.000Z')
  })

  it('can return utc time', () => {
    const date = new DateTime('2021-05-16T16:03:44+06:00')

    expect(date.utc().toString()).toEqual('2021-05-16T10:03:44.000Z')
  })

  it('can format date', () => {
    const date = new DateTime('2021-05-16T16:03:44+06:00')

    expect(date.format('MMM d, yyyy [foo]')).toEqual('May 16, 2021 foo')
  })

  it('can add days to the date', () => {
    const date = new DateTime('2021-05-16T16:03:44+06:00')

    expect(date.add(2, 'd').toString()).toEqual('2021-05-18T22:03:44.000+12:00')
    expect(date.add(2, 'days').toString()).toEqual('2021-05-18T22:03:44.000+12:00')
    expect(date.add(2, 'day').toString()).toEqual('2021-05-18T22:03:44.000+12:00')
  })

  it('can subtract days from the date', () => {
    const date = new DateTime('2021-05-16T16:03:44+06:00')

    expect(date.subtract(2, 'd').toString()).toEqual('2021-05-14T22:03:44.000+12:00')
    expect(date.subtract(2, 'days').toString()).toEqual('2021-05-14T22:03:44.000+12:00')
    expect(date.subtract(2, 'day').toString()).toEqual('2021-05-14T22:03:44.000+12:00')
  })
})
