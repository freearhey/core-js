export class Template {
  #value: string

  constructor(template: string) {
    this.#value = template
  }

  /** Returns a list of all variables specified in the template */
  variables(): string[] {
    const match = this.#value.match(/{[^}]+}/g)

    return Array.isArray(match) ? match.map(s => s.substring(1, s.length - 1)) : []
  }

  /** Replaces variables in the template with values from the object with keys of the same name */
  format(obj: { [key: string]: string | number }): string {
    let output = this.#value
    for (const key in obj) {
      const regex = new RegExp(`{${key}}`, 'g')
      const value = obj[key] || 'undefined'
      output = output.replace(regex, value.toString())
    }

    return output
  }
}
