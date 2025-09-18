export class Dictionary<Type> {
  #data: Record<string, Type>

  constructor(data?: Record<string, Type>) {
    this.#data = data || {}
  }

  /** Sets the value for the key */
  set(key: string, value: Type): this {
    this.#data[key] = value

    return this
  }

  /** Checks whether a value with a given key exists in the dictionary */
  has(key: string): boolean {
    return !!this.#data[key]
  }

  /** Checks whether a value with a given key is missing from the dictionary */
  missing(key: string): boolean {
    return !this.#data[key]
  }

  /** Returns the value for the given key */
  get(key: string): Type | undefined {
    return this.#data[key] ? this.#data[key] : undefined
  }

  /** Returns a list of keys */
  keys(): string[] {
    return Object.keys(this.#data)
  }

  /** Returns all data as a JS object */
  data(): Record<string, Type> {
    return this.#data
  }
}
