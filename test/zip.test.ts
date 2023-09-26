import { Zip } from '../src'

describe('zip', () => {
  it('can compress string', async () => {
    const zip = new Zip()
    const compressed = await zip.compress('ABC')

    expect(compressed).toBeInstanceOf(Buffer)
  })

  it('can decompress buffer', async () => {
    const zip = new Zip()
    const compressed = await zip.compress('ABC')
    const decompressed = await zip.decompress(compressed)

    expect(decompressed.toString()).toEqual('ABC')
  })
})
