import { Test, TestingModule } from '@nestjs/testing';
import { SockteController } from './sockte.controller';
import { SockteService } from './sockte.service';

describe('SockteController', () => {
  let sockteController: SockteController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SockteController],
      providers: [SockteService],
    }).compile();

    sockteController = app.get<SockteController>(SockteController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sockteController.getHello()).toBe('Hello World!');
    });
  });
});
