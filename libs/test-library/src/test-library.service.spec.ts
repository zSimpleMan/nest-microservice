import { Test, TestingModule } from '@nestjs/testing';
import { TestLibraryService } from './test-library.service';

describe('TestLibraryService', () => {
  let service: TestLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestLibraryService],
    }).compile();

    service = module.get<TestLibraryService>(TestLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
