import { File } from '../src'
import path from 'path'

describe('file', () => {
  it('can create empty file', () => {
    const file = new File('folder/example.txt')

    expect(file._filepath).toEqual(path.normalize('folder/example.txt'))
    expect(file._content).toEqual('')
  })

  it('can create file with content', () => {
    const file = new File('folder/example.txt', 'abc')

    expect(file._filepath).toEqual(path.normalize('folder/example.txt'))
    expect(file._content).toEqual('abc')
  })

  it('can return filename', () => {
    const file = new File('folder/example.txt', 'abc')

    expect(file.name()).toEqual('example')
  })

  it('can return dirname', () => {
    const file = new File('folder/example.txt', 'abc')

    expect(file.dirname()).toEqual(path.normalize('./folder'))
  })

  it('can return basename', () => {
    const file = new File('folder/example.txt', 'abc')

    expect(file.basename()).toEqual('example.txt')
  })

  it('can return filepath', () => {
    const file = new File('folder/example.txt', 'abc')

    expect(file.path()).toEqual(path.normalize('folder/example.txt'))
  })

  it('can return content', () => {
    const file = new File('folder/example.txt', 'abc')

    expect(file.content()).toEqual('abc')
  })

  it('can return extension', () => {
    const file = new File('folder/example.txt', 'abc')

    expect(file.extension()).toEqual('txt')
  })

  it('can append content', () => {
    const file = new File('folder/example.txt', 'abc')
    file.append('def')

    expect(file.content()).toEqual('abcdef')
  })
})
