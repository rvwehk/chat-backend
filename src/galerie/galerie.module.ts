import { Module } from '@nestjs/common';
import { GalerieController } from './galerie.controller';
import { GalerieService } from './galerie.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GalerieSchema } from './schema/galerie.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Galerie', schema: GalerieSchema, collection: 'Galerie' }])],
  controllers: [GalerieController],
  providers: [GalerieService]
})
export class GalerieModule {}
