export class StringTemplate {
  _value: string

  constructor(template: string) {
    this._value = template
  }

  variables(): string[] {
    const match = this._value.match(/{[^}]+}/g)

    return Array.isArray(match) ? match.map(s => s.substring(1, s.length - 1)) : []
  }

  format(obj: { [key: string]: string | number }): string {
    let output = this._value
    for (const key in obj) {
      const regex = new RegExp(`{${key}}`, 'g')
      const value = obj[key] || 'undefined'
      output = output.replace(regex, value.toString())
    }

    return output
  }
}
