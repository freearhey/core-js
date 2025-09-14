import { describe, it, expect } from 'vitest'
import { Zip } from '../src'

describe('zip', () => {
  it('can compress string', async () => {
    const zip = new Zip()
    const compressed = zip.compress('ABC')

    expect(compressed).toBeInstanceOf(Uint8Array)
  })

  it('can decompress buffer', async () => {
    const zip = new Zip()
    const compressed = zip.compress('ABC')
    const decompressed = zip.decompress(compressed)

    expect(decompressed).toEqual('ABC')
  })
})
