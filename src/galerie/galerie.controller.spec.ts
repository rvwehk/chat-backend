import { Test, TestingModule } from '@nestjs/testing';
import { GalerieController } from './galerie.controller';

describe('Galerie Controller', () => {
  let controller: GalerieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GalerieController],
    }).compile();

    controller = module.get<GalerieController>(GalerieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
