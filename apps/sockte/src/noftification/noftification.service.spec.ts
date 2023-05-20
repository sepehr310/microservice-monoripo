import { Test, TestingModule } from '@nestjs/testing';
import { NoftificationService } from './noftification.service';

describe('NoftificationService', () => {
  let service: NoftificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoftificationService],
    }).compile();

    service = module.get<NoftificationService>(NoftificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
