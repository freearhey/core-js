import pako from 'pako'

export class Zip {
  compress(data: Uint8Array | ArrayBuffer | string): Uint8Array {
    return pako.deflate(data)
  }

  decompress(buffer: Uint8Array | ArrayBuffer): string {
    return pako.inflate(buffer, { to: 'string' })
  }
}
