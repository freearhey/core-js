import { Storage, File } from '../src'
import fs from 'fs-extra'
import path from 'path'

const INPUT_DIR = './test/__data__/input'
const OUTPUT_DIR = './test/__data__/output'

describe('storage', () => {
  it('can create new storage', () => {
    const storage = new Storage()

    expect(storage._rootDir).toEqual(path.resolve('./'))
  })

  it('can create new storage with custom root directory path', () => {
    const storage = new Storage('./test')

    expect(storage._rootDir).toEqual(path.resolve('./test'))
  })

  it('can return list of files in storage', async () => {
    const storage = new Storage(INPUT_DIR)

    expect(await storage.list()).toEqual(['a.txt', 'b.txt', 'c.json'])
  })

  it('can return list of files in storage by pattern', async () => {
    const storage = new Storage(INPUT_DIR)

    expect(await storage.list('**/*.txt')).toEqual(['a.txt', 'b.txt'])
  })

  it('can create directory', async () => {
    fs.emptyDirSync(OUTPUT_DIR)

    const storage = new Storage(OUTPUT_DIR)

    await storage.createDir('a')
    storage.createDirSync('b')

    expect(fs.existsSync(path.resolve(`${OUTPUT_DIR}/a`))).toEqual(true)
    expect(fs.existsSync(path.resolve(`${OUTPUT_DIR}/b`))).toEqual(true)
  })

  it('can return content from the file', async () => {
    const storage = new Storage(INPUT_DIR)

    expect(await storage.load('a.txt')).toEqual('a')
  })

  it('can return json from the file', async () => {
    const storage = new Storage(INPUT_DIR)

    expect(await storage.json('c.json')).toEqual({ a: 'b', b: 'c' })
  })

  it('can check if file exists', async () => {
    const storage = new Storage(INPUT_DIR)

    expect(storage.existsSync('a.txt')).toEqual(true)
    expect(storage.existsSync('d.txt')).toEqual(false)
    expect(await storage.exists('a.txt')).toEqual(true)
    expect(await storage.exists('d.txt')).toEqual(false)
  })

  it('can check if file exists with absolute path', async () => {
    const storage = new Storage()

    expect(storage.existsSync(path.resolve(`${INPUT_DIR}/a.txt`))).toEqual(true)
    expect(storage.existsSync(path.resolve(`${INPUT_DIR}/d.txt`))).toEqual(false)
    expect(await storage.exists(path.resolve(`${INPUT_DIR}/a.txt`))).toEqual(true)
    expect(await storage.exists(path.resolve(`${INPUT_DIR}/d.txt`))).toEqual(false)
  })

  it('can append content to the file', async () => {
    fs.emptyDirSync(OUTPUT_DIR)
    fs.copySync(`${INPUT_DIR}/a.txt`, `${OUTPUT_DIR}/a.txt`)

    const storage = new Storage(OUTPUT_DIR)

    await storage.append('a.txt', 'b')

    expect(fs.readFileSync(`${OUTPUT_DIR}/a.txt`, { encoding: 'utf8' })).toEqual('ab')
  })

  it('can clear the file', async () => {
    fs.emptyDirSync(OUTPUT_DIR)
    fs.copySync(`${INPUT_DIR}/a.txt`, `${OUTPUT_DIR}/a.txt`)

    const storage = new Storage(OUTPUT_DIR)

    await storage.clear('a.txt')

    expect(fs.readFileSync(`${OUTPUT_DIR}/a.txt`, { encoding: 'utf8' })).toEqual('')
  })

  it('can save content to the file', async () => {
    fs.emptyDirSync(OUTPUT_DIR)
    const storage = new Storage(OUTPUT_DIR)

    await storage.save('d.txt', 'd')
    storage.saveSync('e.txt', 'e')

    expect(fs.readFileSync(`${OUTPUT_DIR}/d.txt`, { encoding: 'utf8' })).toEqual('d')
    expect(fs.readFileSync(`${OUTPUT_DIR}/e.txt`, { encoding: 'utf8' })).toEqual('e')
  })

  it('can save File', async () => {
    fs.emptyDirSync(OUTPUT_DIR)
    const storage = new Storage()
    const file = new File(`${OUTPUT_DIR}/e.txt`, 'e')

    await storage.saveFile(file)

    expect(fs.readFileSync(`${OUTPUT_DIR}/e.txt`, { encoding: 'utf8' })).toEqual('e')
  })
})
