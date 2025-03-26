import { Collection, Dictionary } from '../src'

describe('collection', () => {
  it('can create empty collection', () => {
    const collection = new Collection()

    expect(collection.all()).toEqual([])
  })

  it('can return first item', () => {
    const collection = new Collection(['a', 'b', 'c'])

    expect(collection.first()).toBe('a')
  })

  it('can return last item', () => {
    const collection = new Collection(['a', 'b', 'c'])

    expect(collection.last()).toBe('c')
  })

  it('can find item', () => {
    const collection = new Collection([{ name: 'a' }, { name: 'b' }, { name: 'c' }])

    expect(collection.find(i => i.name === 'b')).toEqual({ name: 'b' })
  })

  it('can add item', () => {
    const collection = new Collection(['a'])
    collection.add('b')
    collection.push('c')

    expect(collection.all()).toEqual(['a', 'b', 'c'])
  })

  it('can check if it intersects with over collection or not', () => {
    const collectionA = new Collection(['a', 'b', 'c'])
    const collectionB = new Collection(['b'])
    const collectionC = new Collection(['c'])

    expect(collectionA.intersects(collectionB)).toBe(true)
    expect(collectionB.intersects(collectionC)).toBe(false)
  })

  it('can return count of items', () => {
    const collection = new Collection(['a', 'b'])

    expect(collection.count()).toEqual(2)
  })

  it('can join items into string', () => {
    const collection = new Collection(['a', 'b'])

    expect(collection.join(',')).toEqual('a,b')
  })

  it('can return index of item', () => {
    const collection = new Collection(['a', 'b'])

    expect(collection.indexOf('b')).toEqual(1)
  })

  it('can remove duplicates', () => {
    const collection = new Collection(['a', 'b', 'b', 'c'])

    expect(collection.uniq()).toEqual(new Collection(['a', 'b', 'c']))
  })

  it('can filter items', () => {
    const collection = new Collection([{ name: 'a' }, { name: 'b' }, { name: 'b' }, { name: 'c' }])

    expect(collection.filter(i => i.name === 'b')).toEqual(
      new Collection([{ name: 'b' }, { name: 'b' }])
    )
  })

  it('can loop through the items', () => {
    const collection = new Collection([{ name: 'a' }, { name: 'b' }, { name: 'c' }])

    let output = ''
    collection.forEach(item => {
      output += item.name
    })
    collection.forEach((item, index) => {
      output += item.name + index
    })
    expect(output).toEqual('abca0b1c2')
    expect(collection).toEqual(new Collection([{ name: 'a' }, { name: 'b' }, { name: 'c' }]))
  })

  it('can remove item by value', () => {
    const collection = new Collection([{ name: 'a' }, { name: 'b' }, { name: 'c' }])

    const removed = collection.remove(i => i.name === 'b')
    expect(removed).toEqual(new Collection([{ name: 'b' }]))
    expect(collection).toEqual(new Collection([{ name: 'a' }, { name: 'c' }]))
  })

  it('can concatinate with another collection', () => {
    const collectionA = new Collection(['a'])
    const collectionB = new Collection(['b'])

    expect(collectionA.concat(collectionB)).toEqual(new Collection(['a', 'b']))
  })

  it('can check if collection is empty', () => {
    const collectionA = new Collection(['a'])
    const collectionB = new Collection([])

    expect(collectionA.isEmpty()).toBe(false)
    expect(collectionB.isEmpty()).toBe(true)
  })

  it('can check if collection is not empty', () => {
    const collectionA = new Collection(['a'])
    const collectionB = new Collection([])

    expect(collectionA.notEmpty()).toBe(true)
    expect(collectionB.notEmpty()).toBe(false)
  })

  it('can sort items', () => {
    const collection = new Collection(['b', 'a', 'c'])

    expect(collection.sort()).toEqual(new Collection(['a', 'b', 'c']))
  })

  it('can order items by value', () => {
    const collection = new Collection([{ name: 'c' }, { name: 'a' }, { name: 'b' }])

    expect(collection.orderBy(i => i.name)).toEqual(
      new Collection([{ name: 'a' }, { name: 'b' }, { name: 'c' }])
    )
  })

  it('can order items by value desc', () => {
    const collection = new Collection([{ name: 'c' }, { name: 'a' }, { name: 'b' }])

    expect(collection.orderBy(i => i.name, 'desc')).toEqual(
      new Collection([{ name: 'c' }, { name: 'b' }, { name: 'a' }])
    )
  })

  it('can sort items by value but not natural', () => {
    const collection = new Collection([
      { name: '01' },
      { name: '002' },
      { name: '100tv' },
      { name: '100TV' }
    ])

    expect(collection.orderBy(i => i.name.toLowerCase(), 'asc', false)).toEqual(
      new Collection([{ name: '002' }, { name: '01' }, { name: '100tv' }, { name: '100TV' }])
    )
  })

  it('can sort items by value', () => {
    const collection = new Collection([
      { name: '002' },
      { name: '01' },
      { name: '100tv' },
      { name: '100TV' }
    ])

    expect(collection.sortBy(i => i.name.toLowerCase())).toEqual(
      new Collection([{ name: '002' }, { name: '01' }, { name: '100tv' }, { name: '100TV' }])
    )
  })

  it('can convert Collection to Dictionary', () => {
    const collection = new Collection([{ name: 'a' }, { name: 'b' }, { name: 'c' }])

    expect(collection.keyBy(i => i.name)).toEqual(
      new Dictionary({ a: { name: 'a' }, b: { name: 'b' }, c: { name: 'c' } })
    )
  })

  it('can check if Collection includes value', () => {
    const collectionA = new Collection([{ name: 'a' }, { name: 'b' }, { name: 'c' }])
    const collectionB = new Collection(['a', 'b', 'c'])

    expect(collectionA.includes((i: any) => i.name === 'a')).toEqual(true)
    expect(collectionA.includes((i: any) => i.name === 'd')).toEqual(false)
    expect(collectionB.includes('b')).toEqual(true)
    expect(collectionB.includes('d')).toEqual(false)
  })

  it('can check if Collection missing value', () => {
    const collectionA = new Collection([{ name: 'a' }, { name: 'b' }, { name: 'c' }])
    const collectionB = new Collection(['a', 'b', 'c'])

    expect(collectionA.missing((i: any) => i.name === 'a')).toEqual(false)
    expect(collectionA.missing((i: any) => i.name === 'd')).toEqual(true)
    expect(collectionB.missing('b')).toEqual(false)
    expect(collectionB.missing('d')).toEqual(true)
  })

  it('can remove duplicates by value', () => {
    const collection = new Collection([{ value: 0.4 }, { value: 1.2 }, { value: 0.2 }])

    expect(collection.uniqBy(i => Math.ceil(i.value))).toEqual(
      new Collection([{ value: 0.4 }, { value: 1.2 }])
    )
  })

  it('can group by value', () => {
    const collection = new Collection([
      { tag: 'a', name: 'a' },
      { tag: 'a', name: 'b' },
      { tag: 'b', name: 'c' }
    ])

    expect(collection.groupBy(i => i.tag)).toEqual(
      new Dictionary({
        a: [
          { tag: 'a', name: 'a' },
          { tag: 'a', name: 'b' }
        ],
        b: [{ tag: 'b', name: 'c' }]
      })
    )
  })

  it('can iterates through the collection', () => {
    const collection = new Collection([{ name: 'a' }, { name: 'b' }, { name: 'c' }])

    expect(collection.map(i => i.name)).toEqual(new Collection(['a', 'b', 'c']))
  })

  it('can return all items as array', () => {
    const collection = new Collection(['a', 'b', 'c'])

    expect(collection.all()).toEqual(['a', 'b', 'c'])
  })

  it('can convert collection to json string', () => {
    const collection = new Collection([{ name: 'a' }, { name: 'b' }, { name: 'c' }])

    expect(collection.toJSON()).toEqual('[{"name":"a"},{"name":"b"},{"name":"c"}]')
  })

  it('can merge with another collection', () => {
    const collectionA = new Collection([
      { id: 1, value: 'a', type: 'c' },
      { id: 2, value: 'b' }
    ])
    const collectionB = new Collection([
      { id: '1', value: 'c' },
      { id: 3, value: 'd' }
    ])

    expect(collectionA.mergeBy(collectionB, item => item.id.toString()).toJSON()).toEqual(
      JSON.stringify([
        { id: 1, value: 'a', type: 'c' },
        { id: 2, value: 'b' },
        { id: 3, value: 'd' }
      ])
    )
  })

  it('can reduce items', () => {
    const collection = new Collection([
      { name: 'a', children: [{ name: 'aa' }, { name: 'ab' }] },
      { name: 'b', children: [{ name: 'ba' }, { name: 'bb' }] },
      { name: 'c' }
    ])

    expect(
      collection.reduce((output, item) => {
        output = output.concat(item.children)

        return output
      })
    ).toEqual(new Collection([{ name: 'aa' }, { name: 'ab' }, { name: 'ba' }, { name: 'bb' }]))
  })
})
