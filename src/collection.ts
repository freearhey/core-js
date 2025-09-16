import _ from 'lodash'
import { orderBy, Order } from 'natural-orderby'
import { Dictionary } from './dictionary.js'

type Iteratee = (value: any) => void

export class Collection<Type> {
  private _items: Type[] = []

  constructor(items?: Type[]) {
    this._items = Array.isArray(items) ? items : []
  }

  first(iteratee?: Iteratee): Type {
    if (iteratee) {
      return _.find(this._items, iteratee)
    }

    return this._items[0]
  }

  last(predicate?: Iteratee): Type {
    if (predicate) {
      return _.findLast(this._items, predicate)
    }

    return this._items[this._items.length - 1]
  }

  find(iteratee: Iteratee): Type {
    return _.find(this._items, iteratee)
  }

  add(data: Type): this {
    this._items.push(data)

    return this
  }

  push(data: Type): this {
    return this.add(data)
  }

  intersects(collection: Collection<Type>): Collection<Type> {
    const items = _.intersection(this._items, collection.all())

    return new Collection<Type>(items)
  }

  intersectsBy(collection: Collection<Type>, iteratee: Iteratee): Collection<Type> {
    const items = _.intersectionBy(this._items, collection.all(), iteratee)

    return new Collection<Type>(items)
  }

  slice(start?: number, end?: number): Collection<Type> {
    const items = _.slice(this._items, start, end)

    return new Collection<Type>(items)
  }

  count(): number {
    return this._items.length
  }

  join(separator: string): string {
    return this._items.join(separator)
  }

  indexOf(instance: Type): number {
    return this._items.indexOf(instance)
  }

  uniq(): Collection<Type> {
    const items = _.uniq(this._items)

    return new Collection<Type>(items)
  }

  filter(iteratee: Iteratee): Collection<Type> {
    const items = _.filter(this._items, iteratee)

    return new Collection<Type>(items)
  }

  forEach(callback: (item: Type, index?: number) => void): this {
    this._items.forEach(callback)

    return this
  }

  remove(iteratee: Iteratee): Collection<Type> {
    const removed = _.remove(this._items, iteratee)

    return new Collection<Type>(removed)
  }

  concat(collection: Collection<Type>): Collection<Type> {
    const items = this._items.concat(collection._items)

    return new Collection<Type>(items)
  }

  reduce(iteratee: Iteratee): Collection<Type> {
    const items = this._items.reduce(iteratee, [])

    return new Collection<Type>(items)
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  notEmpty(): boolean {
    return this._items.length > 0
  }

  sort(): Collection<Type> {
    const items = this._items.sort()

    return new Collection<Type>(items)
  }

  sortBy(iteratees: Iteratee | Iteratee[]): Collection<Type> {
    const items = _.sortBy(this._items, iteratees)

    return new Collection<Type>(items)
  }

  orderBy(
    iteratees: Iteratee | Iteratee[],
    orders: 'asc' | 'desc' | string[] = 'asc',
    natural: boolean = true
  ): Collection<Type> {
    const items = natural
      ? orderBy(this._items, iteratees, orders as Order)
      : _.orderBy(this._items, iteratees, orders as _.Many<boolean | 'asc' | 'desc'>)

    return new Collection<Type>(items)
  }

  keyBy(iteratee: Iteratee): Dictionary {
    const items = _.keyBy(this._items, iteratee)

    return new Dictionary(items)
  }

  includes(value: Iteratee): boolean {
    return !!_.find(this._items, value)
  }

  missing(value: Iteratee): boolean {
    return !_.find(this._items, value)
  }

  uniqBy(iteratee: Iteratee): Collection<Type> {
    const items = _.uniqBy(this._items, iteratee)

    return new Collection<Type>(items)
  }

  groupBy(iteratee: Iteratee): Dictionary {
    const object = _.groupBy(this._items, iteratee)

    return new Dictionary(object)
  }

  map<Type>(iteratee: () => Type): Collection<Type> {
    const items = this._items.map<Type>(iteratee)

    return new Collection<Type>(items)
  }

  all(): Type[] {
    return this._items
  }

  toJSON(): string {
    return JSON.stringify(this._items)
  }

  mergeBy(collection: Collection<Type>, iteratee: Iteratee): Collection<Type> {
    this._items = _.unionBy(this._items, collection._items, iteratee)

    return this
  }

  clone() {
    const items = [...this._items]

    return new Collection<Type>(items)
  }
}
