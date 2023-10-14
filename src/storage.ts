import { File } from './'
import * as path from 'path'
import fs from 'fs-extra'
import { glob } from 'glob'

export class Storage {
  _rootDir: string

  constructor(rootDir?: string) {
    this._rootDir = path.resolve(path.normalize(rootDir || process.cwd()))
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

  createDirSync(dir: string): void {
    if (fs.existsSync(dir)) return

    fs.mkdirSync(dir, { recursive: true })
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

  existsSync(filepath: string): boolean {
    const absFilepath = path.join(this._rootDir, filepath)

    return fs.existsSync(absFilepath)
  }

  async _write(filepath: string, data: any = ''): Promise<void> {
    const absFilepath = path.join(this._rootDir, filepath)
    const dir = path.dirname(absFilepath)

    await this.createDir(dir)
    await fs.writeFile(absFilepath, data, { encoding: 'utf8', flag: 'w' })
  }

  _writeSync(filepath: string, data: any = ''): void {
    const absFilepath = path.join(this._rootDir, filepath)
    const dir = path.dirname(absFilepath)

    this.createDirSync(dir)
    fs.writeFileSync(absFilepath, data, { encoding: 'utf8', flag: 'w' })
  }

  async append(filepath: string, data: string = ''): Promise<void> {
    const absFilepath = path.join(this._rootDir, filepath)

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
    const dir = path.dirname(file.path())

    await this.createDir(dir)
    await fs.writeFile(file.path(), file.content(), { encoding: 'utf8', flag: 'w' })
  }

  async createStream(filepath: string): Promise<NodeJS.WriteStream> {
    const absFilepath = path.join(this._rootDir, filepath)
    const dir = path.dirname(absFilepath)

    await this.createDir(dir)

    return fs.createWriteStream(absFilepath) as unknown as NodeJS.WriteStream
  }
}
