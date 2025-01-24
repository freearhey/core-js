import { File } from './'
import * as path from 'path'
import fs from 'fs-extra'
import { glob } from 'glob'

export class Storage {
  _rootDir: string

  constructor(rootDir?: string) {
    this._rootDir = rootDir ? path.resolve(rootDir) : process.cwd()
  }

  async list(pattern?: string): Promise<string[]> {
    const _pattern = pattern || '*'
    const files = await glob(_pattern, {
      cwd: this._rootDir
    })

    return files.sort()
  }

  async createDir(dir: string): Promise<void> {
    const absFilepath = path.isAbsolute(dir) ? path.resolve(dir) : path.join(this._rootDir, dir)
    if (await fs.exists(absFilepath)) return

    await fs.mkdir(absFilepath, { recursive: true }).catch(console.error)
  }

  createDirSync(dir: string): void {
    const absFilepath = path.isAbsolute(dir) ? path.resolve(dir) : path.join(this._rootDir, dir)
    if (fs.existsSync(absFilepath)) return

    fs.mkdirSync(absFilepath, { recursive: true })
  }

  async load(filepath: string): Promise<string> {
    return this._read(filepath)
  }

  async _read(filepath: string): Promise<string> {
    const absFilepath = path.isAbsolute(filepath)
      ? path.resolve(filepath)
      : path.join(this._rootDir, filepath)

    return await fs.readFile(absFilepath, { encoding: 'utf8' })
  }

  async json(filepath: string): Promise<object | object[]> {
    const content = await this._read(filepath)

    return JSON.parse(content)
  }

  async exists(filepath: string): Promise<boolean> {
    const absFilepath = path.isAbsolute(filepath)
      ? path.resolve(filepath)
      : path.join(this._rootDir, filepath)

    return await fs.exists(absFilepath)
  }

  existsSync(filepath: string): boolean {
    const absFilepath = path.isAbsolute(filepath)
      ? path.resolve(filepath)
      : path.join(this._rootDir, filepath)

    return fs.existsSync(absFilepath)
  }

  async _write(filepath: string, data: any = ''): Promise<void> {
    const absFilepath = path.isAbsolute(filepath)
      ? path.resolve(filepath)
      : path.join(this._rootDir, filepath)
    const dir = path.dirname(filepath)

    await this.createDir(dir)
    await fs.writeFile(absFilepath, data, { encoding: 'utf8', flag: 'w' })
  }

  _writeSync(filepath: string, data: any = ''): void {
    const absFilepath = path.isAbsolute(filepath)
      ? path.resolve(filepath)
      : path.join(this._rootDir, filepath)
    const dir = path.dirname(filepath)

    this.createDirSync(dir)
    fs.writeFileSync(absFilepath, data, { encoding: 'utf8', flag: 'w' })
  }

  async append(filepath: string, data: string = ''): Promise<void> {
    const absFilepath = path.isAbsolute(filepath)
      ? path.resolve(filepath)
      : path.join(this._rootDir, filepath)

    await fs.appendFile(absFilepath, data, { encoding: 'utf8' })
  }

  async clear(filepath: string): Promise<void> {
    await this._write(filepath)
  }

  async save(filepath: string, content: any): Promise<void> {
    await this._write(filepath, content)
  }

  async saveSync(filepath: string, content: any): Promise<void> {
    this._writeSync(filepath, content)
  }

  async saveFile(file: File): Promise<void> {
    const absFilepath = path.isAbsolute(file.path())
      ? path.resolve(file.path())
      : path.join(this._rootDir, file.path())

    await this.createDir(file.dirname())
    await fs.writeFile(absFilepath, file.content(), { encoding: 'utf8', flag: 'w' })
  }

  async createStream(filepath: string): Promise<NodeJS.WriteStream> {
    const absFilepath = path.isAbsolute(filepath)
      ? path.resolve(filepath)
      : path.join(this._rootDir, filepath)
    const dir = path.dirname(filepath)

    await this.createDir(dir)

    return fs.createWriteStream(absFilepath) as unknown as NodeJS.WriteStream
  }
}
