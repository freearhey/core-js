import * as path from 'path'

export class File {
  _filepath: string
  _content: string

  constructor(filepath: string, content?: string) {
    this._filepath = path.normalize(filepath)
    this._content = content || ''
  }

  name() {
    return path.parse(this._filepath).name
  }

  dirname() {
    return path.dirname(this._filepath)
  }

  basename() {
    return path.basename(this._filepath)
  }

  append(data: string) {
    this._content = this._content + data
  }

  extension() {
    return this._filepath.split('.').pop()
  }

  path() {
    return this._filepath
  }

  content() {
    return this._content
  }
}
