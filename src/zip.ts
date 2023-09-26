import { gzip, ungzip } from 'node-gzip'

export class Zip {
  constructor() {}

  async compress(data: string): Promise<Buffer> {
    return gzip(data)
  }

  async decompress(buffer: Buffer): Promise<Buffer> {
    return ungzip(buffer)
  }
}
