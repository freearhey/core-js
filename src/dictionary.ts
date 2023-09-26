export class Dictionary {
  _data: {
    [key: string]: any
  }

  constructor(_data?: object) {
    this._data = _data || {}
  }

  set(key: string, value: any) {
    this._data[key] = value
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

  data() {
    return this._data
  }
}
