import { Module } from '@nestjs/common';
import { TestLibraryService } from './test-library.service';

@Module({
  providers: [TestLibraryService],
  exports: [TestLibraryService],
})
export class TestLibraryModule {}
