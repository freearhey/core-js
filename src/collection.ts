import _ from 'lodash'
import { orderBy, Order } from 'natural-orderby'
import { Dictionary } from './'

type Iteratee = (value: any, value2?: any) => void

export class Collection {
  _items: any[] = []

  constructor(items?: any) {
    this._items = Array.isArray(items) ? items : []
  }

  first(predicate?: Iteratee) {
    if (predicate) {
      return this._items.find(predicate)
    }

    return this._items[0]
  }

  last(predicate?: Iteratee) {
    if (predicate) {
      return _.findLast(this._items, predicate)
    }

    return this._items[this._items.length - 1]
  }

  find(iteratee: Iteratee): any {
    return this._items.find(iteratee)
  }

  add(data: string | number | object) {
    this._items.push(data)

    return this
  }

  intersects(collection: Collection): boolean {
    return _.intersection(this._items, collection.all()).length > 0
  }

  count() {
    return this._items.length
  }

  join(separator: string) {
    return this._items.join(separator)
  }

  indexOf(value: string | number | object) {
    return this._items.indexOf(value)
  }

  push(data: any) {
    this.add(data)
  }

  uniq() {
    const items = _.uniq(this._items)

    return new Collection(items)
  }

  filter(iteratee: Iteratee) {
    const items = _.filter(this._items, iteratee)

    return new Collection(items)
  }

  forEach(callback: (item: any, index?: number) => void) {
    this._items.forEach(callback)

    return this
  }

  remove(iteratee: Iteratee): Collection {
    const removed = _.remove(this._items, iteratee)

    return new Collection(removed)
  }

  concat(collection: Collection) {
    const items = this._items.concat(collection._items)

    return new Collection(items)
  }

  reduce(iteratee: Iteratee) {
    const items = this._items.reduce(iteratee, [])

    return new Collection(items)
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  notEmpty(): boolean {
    return this._items.length > 0
  }

  sort() {
    const items = this._items.sort()

    return new Collection(items)
  }

  sortBy(iteratees: Iteratee | Iteratee[]) {
    const items = _.sortBy(this._items, iteratees)

    return new Collection(items)
  }

  orderBy(
    iteratees: Iteratee | Iteratee[],
    orders: 'asc' | 'desc' | string[] = 'asc',
    natural: boolean = true
  ) {
    const items = natural
      ? orderBy(this._items, iteratees, orders as Order)
      : _.orderBy(this._items, iteratees, orders as _.Many<boolean | 'asc' | 'desc'>)

    return new Collection(items)
  }

  keyBy(iteratee: Iteratee) {
    const items = _.keyBy(this._items, iteratee)

    return new Dictionary(items)
  }

  includes(value: any): boolean {
    if (typeof value === 'function') {
      const found = this._items.find(value)

      return !!found
    } else if (typeof value === 'string') {
      return this._items.includes(value)
    }

    return false
  }

  missing(value: any) {
    if (typeof value === 'function') {
      const found = this._items.find(value)

      return !found
    } else if (typeof value === 'string') {
      return !this._items.includes(value)
    }

    return true
  }

  uniqBy(iteratee: Iteratee) {
    const items = _.uniqBy(this._items, iteratee)

    return new Collection(items)
  }

  groupBy(iteratee: Iteratee) {
    const object = _.groupBy(this._items, iteratee)

    return new Dictionary(object)
  }

  map(iteratee: Iteratee) {
    const items = this._items.map(iteratee)

    return new Collection(items)
  }

  all() {
    return this._items
  }

  toJSON() {
    return JSON.stringify(this._items)
  }

  mergeBy(collection: Collection, iteratee: Iteratee): Collection {
    this._items = _.unionBy(this._items, collection._items, iteratee)

    return this
  }
}
