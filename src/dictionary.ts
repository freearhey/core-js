export type DictionaryData = {
  [key: string]: any
}

export class Dictionary {
  _data: DictionaryData

  constructor(_data?: DictionaryData) {
    this._data = _data || {}
  }

  set(key: string, value: any): this {
    this._data[key] = value

    return this
  }

  has(key: string): boolean {
    return !!this._data[key]
  }

  missing(key: string): boolean {
    return !this._data[key]
  }

  get(key: string): any {
    return this._data[key] ? this._data[key] : undefined
  }

  keys(): string[] {
    return Object.keys(this._data)
  }

  data(): DictionaryData {
    return this._data
  }
}
