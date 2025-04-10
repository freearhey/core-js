import * as path from 'path'

export class File {
  _filepath: string
  _content: any

  constructor(filepath: string, content?: any) {
    this._filepath = path.normalize(filepath)
    this._content = content || ''
  }

  name(): string {
    return path.parse(this._filepath).name
  }

  dirname(): string {
    return path.dirname(this._filepath)
  }

  basename(): string {
    return path.basename(this._filepath)
  }

  append(content: any): this {
    this._content = this._content + content

    return this
  }

  extension(): string {
    return this._filepath.split('.').pop()
  }

  path(): string {
    return this._filepath
  }

  content(): any {
    return this._content
  }
}
