import { File } from './'
import * as path from 'path'
import fs from 'fs-extra'
import { glob } from 'glob'

export class Storage {
  _rootDir: string

  constructor(rootDir?: string) {
    this._rootDir = path.normalize(rootDir || './')
  }

  async list(pattern?: string): Promise<string[]> {
    const _pattern = pattern || '*'
    const files = await glob(_pattern, {
      cwd: this._rootDir
    })

    return files.sort()
  }

  async createDir(dir: string): Promise<void> {
    if (await fs.exists(dir)) return

    await fs.mkdir(dir, { recursive: true }).catch(console.error)
  }

  async load(filepath: string): Promise<string> {
    return this._read(filepath)
  }

  async _read(filepath: string): Promise<string> {
    const absFilepath = path.join(this._rootDir, filepath)

    return await fs.readFile(absFilepath, { encoding: 'utf8' })
  }

  async json(filepath: string): Promise<object> {
    const content = await this._read(filepath)

    return JSON.parse(content)
  }

  async exists(filepath: string): Promise<boolean> {
    const absFilepath = path.join(this._rootDir, filepath)

    return await fs.exists(absFilepath)
  }

  async _write(filepath: string, data: string = ''): Promise<void> {
    const absFilepath = path.join(this._rootDir, filepath)
    const dir = path.dirname(absFilepath)

    await this.createDir(dir)
    await fs.writeFile(absFilepath, data, { encoding: 'utf8', flag: 'w' })
  }

  async append(filepath: string, data: string = ''): Promise<void> {
    const absFilepath = path.join(this._rootDir, filepath)

    await fs.appendFile(absFilepath, data, { encoding: 'utf8' })
  }

  async clear(filepath: string): Promise<void> {
    await this._write(filepath)
  }

  async save(filepath: string, content: string): Promise<void> {
    await this._write(filepath, content)
  }

  async saveFile(file: File): Promise<void> {
    await this._write(file.path(), file.content())
  }

  async createStream(filepath: string): Promise<NodeJS.WriteStream> {
    const absFilepath = path.join(this._rootDir, filepath)
    const dir = path.dirname(absFilepath)

    await this.createDir(dir)

    return fs.createWriteStream(absFilepath) as unknown as NodeJS.WriteStream
  }
}
