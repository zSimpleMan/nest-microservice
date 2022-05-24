import { CacheModule, Module } from '@nestjs/common';
import { CacheLibraryService } from './cache-library.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: () => ({
        ttl: 1000
      })
    })
  ],
  providers: [CacheLibraryService],
  exports: [CacheLibraryService],
})
export class CacheLibraryModule {}
