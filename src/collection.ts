import _ from 'lodash'
import { orderBy, Order } from 'natural-orderby'
import { Dictionary } from './dictionary.js'

type Iteratee = (value: any, value2?: any) => void

export class Collection {
  _items: any[] = []

  constructor(items?: any) {
    this._items = Array.isArray(items) ? items : []
  }

  first(iteratee?: Iteratee): any {
    if (iteratee) {
      return _.find(this._items, iteratee)
    }

    return this._items[0]
  }

  last(predicate?: Iteratee): any {
    if (predicate) {
      return _.findLast(this._items, predicate)
    }

    return this._items[this._items.length - 1]
  }

  find(iteratee: Iteratee): any {
    return _.find(this._items, iteratee)
  }

  add(data: any): this {
    this._items.push(data)

    return this
  }

  push(data: any): this {
    return this.add(data)
  }

  intersects(collection: Collection): Collection {
    const items = _.intersection(this._items, collection.all())

    return new Collection(items)
  }

  intersectsBy(collection: Collection, iteratee: Iteratee): Collection {
    const items = _.intersectionBy(this._items, collection.all(), iteratee)

    return new Collection(items)
  }

  slice(start?: number, end?: number): Collection {
    const items = _.slice(this._items, start, end)

    return new Collection(items)
  }

  count(): number {
    return this._items.length
  }

  join(separator: string): string {
    return this._items.join(separator)
  }

  indexOf(value: string | number | object): number {
    return this._items.indexOf(value)
  }

  uniq(): Collection {
    const items = _.uniq(this._items)

    return new Collection(items)
  }

  filter(iteratee: Iteratee): Collection {
    const items = _.filter(this._items, iteratee)

    return new Collection(items)
  }

  forEach(callback: (item: any, index?: number) => void): this {
    this._items.forEach(callback)

    return this
  }

  remove(iteratee: Iteratee): Collection {
    const removed = _.remove(this._items, iteratee)

    return new Collection(removed)
  }

  concat(collection: Collection): Collection {
    const items = this._items.concat(collection._items)

    return new Collection(items)
  }

  reduce(iteratee: Iteratee): Collection {
    const items = this._items.reduce(iteratee, [])

    return new Collection(items)
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  notEmpty(): boolean {
    return this._items.length > 0
  }

  sort(): Collection {
    const items = this._items.sort()

    return new Collection(items)
  }

  sortBy(iteratees: Iteratee | Iteratee[]): Collection {
    const items = _.sortBy(this._items, iteratees)

    return new Collection(items)
  }

  orderBy(
    iteratees: Iteratee | Iteratee[],
    orders: 'asc' | 'desc' | string[] = 'asc',
    natural: boolean = true
  ): Collection {
    const items = natural
      ? orderBy(this._items, iteratees, orders as Order)
      : _.orderBy(this._items, iteratees, orders as _.Many<boolean | 'asc' | 'desc'>)

    return new Collection(items)
  }

  keyBy(iteratee: Iteratee): Dictionary {
    const items = _.keyBy(this._items, iteratee)

    return new Dictionary(items)
  }

  includes(value: any): boolean {
    if (typeof value === 'function') {
      const found = _.find(this._items, value)

      return !!found
    } else if (typeof value === 'string') {
      return _.includes(this._items, value)
    }

    return false
  }

  missing(value: any): boolean {
    if (typeof value === 'function') {
      const found = _.find(this._items, value)

      return !found
    } else if (typeof value === 'string') {
      return !_.includes(this._items, value)
    }

    return true
  }

  uniqBy(iteratee: Iteratee): Collection {
    const items = _.uniqBy(this._items, iteratee)

    return new Collection(items)
  }

  groupBy(iteratee: Iteratee): Dictionary {
    const object = _.groupBy(this._items, iteratee)

    return new Dictionary(object)
  }

  map(iteratee: Iteratee): Collection {
    const items = this._items.map(iteratee)

    return new Collection(items)
  }

  all(): any[] {
    return this._items
  }

  toJSON(): string {
    return JSON.stringify(this._items)
  }

  mergeBy(collection: Collection, iteratee: Iteratee): Collection {
    this._items = _.unionBy(this._items, collection._items, iteratee)

    return this
  }
}
