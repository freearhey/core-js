import { Collection, Dictionary } from '../src'
import { describe, it, expect } from 'vitest'

describe('collection', () => {
  it('can create empty collection', () => {
    const collection = new Collection<string>()

    expect(collection.all()).toEqual([])
  })

  it('can return first item', () => {
    const collection = new Collection<string>(['a', 'b', 'c'])

    expect(collection.first()).toBe('a')
  })

  it('can return last item', () => {
    const collection = new Collection<string>(['a', 'b', 'c'])

    expect(collection.last()).toBe('c')
  })

  it('can find item', () => {
    const collection = new Collection<{ name: string }>([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ])

    expect(collection.find(i => i.name === 'b')).toEqual({ name: 'b' })
  })

  it('can add item', () => {
    const collection = new Collection<string>(['a'])
    collection.add('b')
    collection.add('c')

    expect(collection.all()).toEqual(['a', 'b', 'c'])
  })

  it('can find all intersections with another collection', () => {
    const collectionA = new Collection<string>(['a', 'b', 'c'])
    const collectionB = new Collection<string>(['b'])
    const collectionC = new Collection<string>(['c'])

    expect(collectionA.intersects(collectionB)).toEqual(new Collection<string>(['b']))
    expect(collectionB.intersects(collectionC)).toEqual(new Collection<string>())
  })

  it('can find all intersections with another collection by key', () => {
    const collectionA = new Collection<{ name: string }>([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ])
    const collectionB = new Collection<{ name: string }>([{ name: 'b' }])
    const collectionC = new Collection<{ name: string }>([{ name: 'c' }])

    expect(collectionA.intersectsBy(collectionB, item => item.name)).toEqual(
      new Collection<{ name: string }>([{ name: 'b' }])
    )
    expect(collectionB.intersectsBy(collectionC, 'name')).toEqual(new Collection<string>())
  })

  it('can return count of items', () => {
    const collection = new Collection<string>(['a', 'b'])

    expect(collection.count()).toEqual(2)
  })

  it('can return random item', () => {
    const collection = new Collection<string>(['a', 'b'])

    expect(collection.sample()).toBeOneOf(['a', 'b'])
  })

  it('can join items into string', () => {
    const collection = new Collection<string>(['a', 'b'])

    expect(collection.join(',')).toEqual('a,b')
  })

  it('can return index of item', () => {
    const collection = new Collection<string>(['a', 'b'])

    expect(collection.indexOf('b')).toEqual(1)
  })

  it('can remove duplicates', () => {
    const collection = new Collection<string>(['a', 'b', 'b', 'c'])

    expect(collection.uniq()).toEqual(new Collection<string>(['a', 'b', 'c']))
  })

  it('can filter items', () => {
    const collection = new Collection<{ name: string }>([
      { name: 'a' },
      { name: 'b' },
      { name: 'b' },
      { name: 'c' }
    ])

    expect(collection.filter(i => i.name === 'b')).toEqual(
      new Collection<{ name: string }>([{ name: 'b' }, { name: 'b' }])
    )
  })

  it('can loop through the items', () => {
    const collection = new Collection<{ name: string }>([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ])

    let output = ''
    collection.forEach(item => {
      output += item.name
    })
    collection.forEach((item, index) => {
      output += item.name + index
    })
    expect(output).toEqual('abca0b1c2')
    expect(collection).toEqual(
      new Collection<{ name: string }>([{ name: 'a' }, { name: 'b' }, { name: 'c' }])
    )
  })

  it('can remove item by value', () => {
    const collection = new Collection<{ name: string }>([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ])

    const removed = collection.remove(i => i.name === 'b')
    expect(removed).toEqual(new Collection<{ name: string }>([{ name: 'b' }]))
    expect(collection).toEqual(new Collection<{ name: string }>([{ name: 'a' }, { name: 'c' }]))
  })

  it('can concatinate with another collection', () => {
    const collectionA = new Collection<string>(['a'])
    const collectionB = new Collection<string>(['b'])

    collectionA.concat(collectionB)

    expect(collectionA).toEqual(new Collection<string>(['a', 'b']))
  })

  it('can check if collection is empty', () => {
    const collectionA = new Collection<string>(['a'])
    const collectionB = new Collection<string>([])

    expect(collectionA.isEmpty()).toBe(false)
    expect(collectionB.isEmpty()).toBe(true)
  })

  it('can check if collection is not empty', () => {
    const collectionA = new Collection<string>(['a'])
    const collectionB = new Collection<string>([])

    expect(collectionA.isNotEmpty()).toBe(true)
    expect(collectionB.isNotEmpty()).toBe(false)
  })

  it('can sort items', () => {
    const collectionA = new Collection<string>(['b', 'a', 'c'])
    const collectionB = new Collection<{ name: string }>([
      { name: 'b' },
      { name: 'a' },
      { name: 'c' }
    ])

    expect(collectionA.sort()).toEqual(new Collection<string>(['a', 'b', 'c']))
    expect(collectionB.sort()).toEqual(
      new Collection<{ name: string }>([{ name: 'a' }, { name: 'b' }, { name: 'c' }])
    )
  })

  it('can clone itself', () => {
    const collection = new Collection<string>(['b', 'a', 'c'])
    const clone = collection.clone().sort()

    expect(clone.all()).not.toEqual(collection.all())
  })

  it('can order items by value', () => {
    const collection = new Collection<{ name: string }>([
      { name: 'c' },
      { name: 'a' },
      { name: 'b' }
    ])

    expect(collection.sortBy(i => i.name)).toEqual(
      new Collection<{ name: string }>([{ name: 'a' }, { name: 'b' }, { name: 'c' }])
    )
  })

  it('can order items by value desc', () => {
    const collection = new Collection<{ name: string }>([
      { name: 'c' },
      { name: 'a' },
      { name: 'b' }
    ])

    expect(collection.sortBy(i => i.name, 'desc')).toEqual(
      new Collection<{ name: string }>([{ name: 'c' }, { name: 'b' }, { name: 'a' }])
    )
  })

  it('can sort items by value but not natural', () => {
    const collection = new Collection<{ name: string }>([
      { name: '01' },
      { name: '002' },
      { name: '100tv' },
      { name: '100TV' }
    ])

    expect(collection.sortBy(i => i.name.toLowerCase(), 'asc', false)).toEqual(
      new Collection<{ name: string }>([
        { name: '002' },
        { name: '01' },
        { name: '100tv' },
        { name: '100TV' }
      ])
    )
  })

  it('can sort items by value', () => {
    const collection = new Collection<{ name: string }>([
      { name: '002' },
      { name: '01' },
      { name: '100tv' },
      { name: '100TV' }
    ])

    expect(collection.sortBy(i => i.name.toLowerCase())).toEqual(
      new Collection<{ name: string }>([
        { name: '002' },
        { name: '01' },
        { name: '100tv' },
        { name: '100TV' }
      ])
    )
  })

  it('can convert Collection to Dictionary', () => {
    const collection = new Collection<{ name: string }>([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ])

    expect(collection.keyBy(i => i.name)).toEqual(
      new Dictionary({ a: { name: 'a' }, b: { name: 'b' }, c: { name: 'c' } })
    )
  })

  it('can check if Collection includes value', () => {
    const collectionA = new Collection<{ name: string }>([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ])
    const collectionB = new Collection<string>(['a', 'b', 'c'])

    expect(collectionA.includes((i: any) => i.name === 'a')).toEqual(true)
    expect(collectionA.includes((i: any) => i.name === 'd')).toEqual(false)
    expect(collectionB.includes((i: string) => i === 'b')).toEqual(true)
    expect(collectionB.includes((i: string) => i === 'd')).toEqual(false)
  })

  it('can check if Collection missing value', () => {
    const collectionA = new Collection<{ name: string }>([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ])
    const collectionB = new Collection<string>(['a', 'b', 'c'])

    expect(collectionA.missing((i: any) => i.name === 'a')).toEqual(false)
    expect(collectionA.missing((i: any) => i.name === 'd')).toEqual(true)
    expect(collectionB.missing((i: string) => i === 'b')).toEqual(false)
    expect(collectionB.missing((i: string) => i === 'd')).toEqual(true)
  })

  it('can remove duplicates by value', () => {
    const collection = new Collection<{ value: number }>([
      { value: 0.4 },
      { value: 1.2 },
      { value: 0.2 }
    ])

    expect(collection.uniqBy(i => Math.ceil(i.value))).toEqual(
      new Collection<{ value: number }>([{ value: 0.4 }, { value: 1.2 }])
    )
  })

  it('can group by value', () => {
    const collection = new Collection<{ tag: string; name: string }>([
      { tag: 'a', name: 'a' },
      { tag: 'a', name: 'b' },
      { tag: 'b', name: 'c' }
    ])

    expect(collection.groupBy(i => i.tag)).toEqual(
      new Dictionary<{ tag: string; name: string }[]>({
        a: [
          { tag: 'a', name: 'a' },
          { tag: 'a', name: 'b' }
        ],
        b: [{ tag: 'b', name: 'c' }]
      })
    )
  })

  it('can iterates through the collection', () => {
    const collection = new Collection<{ name: string }>([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ])

    expect(collection.map(i => i.name)).toEqual(new Collection<string>(['a', 'b', 'c']))
  })

  it('can return all items as array', () => {
    const collection = new Collection<string>(['a', 'b', 'c'])

    expect(collection.all()).toEqual(['a', 'b', 'c'])
  })

  it('can convert collection to json string', () => {
    const collection = new Collection<{ name: string }>([
      { name: 'a' },
      { name: 'b' },
      { name: 'c' }
    ])

    expect(collection.toJSON()).toEqual('[{"name":"a"},{"name":"b"},{"name":"c"}]')
  })
})
