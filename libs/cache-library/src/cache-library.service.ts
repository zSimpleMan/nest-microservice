import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheLibraryService {
  constructor(
    @Inject('CACHE_MANAGER')
    private cacheManager: Cache
  ) {}

  private ttl = 1000

  public async get (key: string) {
    return await this.cacheManager.get(key)
  }

  public async set (key: string, value: any) {
    await this.cacheManager.set(key, value, { ttl: this.ttl })
    console.log(this.ttl)
    return true
  }

  public getInstance () {
    return this.cacheManager
  }
}
