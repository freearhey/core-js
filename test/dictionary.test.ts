import { Dictionary } from '../src'

describe('dictionary', () => {
  it('can create empty dictionary', () => {
    const dict = new Dictionary()

    expect(dict._data).toEqual({})
  })

  it('can create dictionary from object', () => {
    const dict = new Dictionary({ a: 'b', b: 'a' })

    expect(dict._data).toEqual({ a: 'b', b: 'a' })
  })

  it('can set value with a key', () => {
    const dict = new Dictionary()
    dict.set('a', 'b')

    expect(dict._data).toEqual({ a: 'b' })
  })

  it('can check if value is exist by its key', () => {
    const dict = new Dictionary({ a: 'b' })

    expect(dict.has('a')).toEqual(true)
    expect(dict.has('b')).toEqual(false)
  })

  it('can check if value is missing by its key', () => {
    const dict = new Dictionary({ a: 'b' })

    expect(dict.missing('a')).toEqual(false)
    expect(dict.missing('b')).toEqual(true)
  })

  it('can return value by key', () => {
    const dict = new Dictionary({ a: 'b' })

    expect(dict.get('a')).toEqual('b')
  })

  it('can return all keys as an array', () => {
    const dict = new Dictionary({ a: 'b', b: 'c' })

    expect(dict.keys()).toEqual(['a', 'b'])
  })

  it('can return all data as object', () => {
    const dict = new Dictionary({ a: 'b', b: 'c' })

    expect(dict.data()).toEqual({ a: 'b', b: 'c' })
  })
})
