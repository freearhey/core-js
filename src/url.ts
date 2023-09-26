import normalizeUrl from 'normalize-url'

export class URL {
  _value: string

  constructor(url: string) {
    this._value = url
  }

  normalize(options?: normalizeUrl.Options): URL {
    const _options = { stripWWW: false, ...options }
    const normalized = normalizeUrl(this._value, _options)

    this._value = decodeURIComponent(normalized).replace(/\s/g, '+')

    return this
  }

  toString(): string {
    return this._value
  }
}
