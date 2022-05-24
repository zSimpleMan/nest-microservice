import { Injectable } from '@nestjs/common';

@Injectable()
export class TestLibraryService {
  public get () {
    console.log('test-library')
  }
}
