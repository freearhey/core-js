import { URL } from '../src'

describe('url', () => {
  it('can create new url from string', () => {
    const url = new URL('http://example.com/folder/file.png')

    expect(url._value).toEqual('http://example.com/folder/file.png')
  })

  it('can normalize url', () => {
    const url = new URL('http://www.example.com/folder/file.png')

    expect(url.normalize()).toEqual(new URL('http://www.example.com/folder/file.png'))
    expect(url.normalize({ stripWWW: true })).toEqual(new URL('http://example.com/folder/file.png'))
  })

  it('can return url as a string', () => {
    const url = new URL('http://www.example.com/folder/file.png')

    expect(url.toString()).toEqual('http://www.example.com/folder/file.png')
  })
})
