import { Test, TestingModule } from '@nestjs/testing';
import { NoftificationGateway } from './noftification.gateway';
import { NoftificationService } from './noftification.service';

describe('NoftificationGateway', () => {
  let gateway: NoftificationGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoftificationGateway, NoftificationService],
    }).compile();

    gateway = module.get<NoftificationGateway>(NoftificationGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
