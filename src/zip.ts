import pako from 'pako'

export class Zip {
  compress(data: Uint8Array | ArrayBuffer | string): Uint8Array {
    return pako.gzip(data)
  }

  decompress(buffer: Uint8Array | ArrayBuffer): string {
    return pako.ungzip(buffer, { to: 'string' })
  }
}
