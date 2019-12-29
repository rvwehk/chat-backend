import { Test, TestingModule } from '@nestjs/testing';
import { FavoriesController } from './favories.controller';

describe('Favories Controller', () => {
  let controller: FavoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriesController],
    }).compile();

    controller = module.get<FavoriesController>(FavoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
