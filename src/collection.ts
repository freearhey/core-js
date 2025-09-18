import { orderBy, Order } from 'natural-orderby'
import { Dictionary } from './dictionary.js'
import _ from 'lodash'

export type CollectionIterator = (value: any) => void

export class Collection<Type> {
  #items: Type[] = []

  constructor(items?: Type[]) {
    this.#items = Array.isArray(items) ? items : []
  }

  /** Gets the first element of collection */
  first(iterator?: CollectionIterator): Type {
    if (iterator) {
      return _.find(this.#items, iterator)
    }

    return this.#items[0]
  }

  /** Gets the last element of collection */
  last(predicate?: CollectionIterator): Type {
    if (predicate) {
      return _.findLast(this.#items, predicate)
    }

    return this.#items[this.#items.length - 1]
  }

  /** Return the first element of the collection that meets the requirements */
  find(iterator: CollectionIterator): Type {
    return _.find(this.#items, iterator)
  }

  /** Adds a new element to the end of the collection */
  add(data: Type): this {
    this.#items.push(data)

    return this
  }

  /** Gets a random element from collection */
  sample(): Type {
    return _.sample(this.#items)
  }

  /** Returns a new collection with all unique elements that are in both collections */
  intersects(collection: Collection<Type>): Collection<Type> {
    const items = _.intersection(this.#items, collection.all())

    return new Collection<Type>(items)
  }

  /** Returns a new collection with all unique elements that are in both collections, taking into account the specified requirements */
  intersectsBy(collection: Collection<Type>, iterator: CollectionIterator): Collection<Type> {
    const items = _.intersectionBy(this.#items, collection.all(), iterator)

    return new Collection<Type>(items)
  }

  /** Creates a slice of collection from start up to, but not including, end */
  slice(start?: number, end?: number): Collection<Type> {
    const items = _.slice(this.#items, start, end)

    return new Collection<Type>(items)
  }

  /** Returns the number of items in the collection */
  count(): number {
    return this.#items.length
  }

  /** Converts all elements in collection into a string separated by separator */
  join(separator: string): string {
    return this.#items.join(separator)
  }

  /** Gets the index at which the first occurrence of value is found in collection */
  indexOf(item: Type): number {
    return this.#items.indexOf(item)
  }

  /** Creates a duplicate-free version of a collection */
  uniq(): Collection<Type> {
    const items = _.uniq(this.#items)

    return new Collection<Type>(items)
  }

  /** Creates a duplicate-free version of a collection according to requirements */
  uniqBy(iterator: CollectionIterator): Collection<Type> {
    const items = _.uniqBy(this.#items, iterator)

    return new Collection<Type>(items)
  }

  /** Iterates over elements of collection, returning a collection of all elements that meets the requirements */
  filter(iterator: CollectionIterator): Collection<Type> {
    const items = _.filter(this.#items, iterator)

    return new Collection<Type>(items)
  }

  /** Iterates over elements of collection and invokes callback for each element */
  forEach(callback: (item: Type, index?: number) => void): this {
    this.#items.forEach(callback)

    return this
  }

  /** Removes all elements from collection that meets the requirements */
  remove(iterator: CollectionIterator): Collection<Type> {
    const removed = _.remove(this.#items, iterator)

    return new Collection<Type>(removed)
  }

  /** Combines elements from both collections into one */
  concat(collection: Collection<Type>): this {
    this.#items = this.#items.concat(collection.#items)

    return this
  }

  /** Returns `true` if the collection is empty */
  isEmpty(): boolean {
    return this.#items.length === 0
  }

  /** Returns `true` if the collection is not empty */
  isNotEmpty(): boolean {
    return this.#items.length > 0
  }

  /** Sorts the items in the collection alphabetically */
  sort(): Collection<Type> {
    const items = this.#items.sort()

    return new Collection<Type>(items)
  }

  /** Sorts collection items according to requirements */
  sortBy(
    iterators: CollectionIterator | CollectionIterator[],
    orders: 'asc' | 'desc' | string[] = 'asc',
    natural: boolean = true
  ): this {
    this.#items = natural
      ? orderBy(this.#items, iterators, orders as Order)
      : _.orderBy(this.#items, iterators, orders as _.Many<boolean | 'asc' | 'desc'>)

    return this
  }

  /** Checks if value is in collection */
  includes(value: CollectionIterator): boolean {
    return !!_.find(this.#items, value)
  }

  /** Checks whether a value is missing from the collection */
  missing(value: CollectionIterator): boolean {
    return !_.find(this.#items, value)
  }

  /** Creates a Dictionary composed of keys generated from the results of running each element of collection thru iterator */
  keyBy(iterator: CollectionIterator): Dictionary<Type> {
    const items = _.keyBy(this.#items, iterator)

    return new Dictionary<Type>(items)
  }

  /** Creates a Dictionary composed of keys generated from the results of running each element of collection thru iterator */
  groupBy(iterator: CollectionIterator): Dictionary<Type[]> {
    const _dictionary = _.groupBy<Type>(this.#items, iterator)

    return new Dictionary<Type[]>(_dictionary)
  }

  /** Creates a new Collection of values by running each element in collection thru iterator */
  map<Type>(iterator: (item: any) => Type): Collection<Type> {
    const items = this.#items.map<Type>(iterator)

    return new Collection<Type>(items)
  }

  /** Creates a shallow copy of collection */
  clone() {
    const items = [...this.#items]

    return new Collection<Type>(items)
  }

  /** Returns the underlying array represented by the collection */
  all(): Type[] {
    return this.#items
  }

  /** Converts the collection into a JSON serialized string */
  toJSON(): string {
    return JSON.stringify(this.#items)
  }
}
