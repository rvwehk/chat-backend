import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoriesController } from './favories.controller';
import { FavoriesService } from './favories.service';
import { FavoriesSchema } from './schemas/favories.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Favories', schema: FavoriesSchema, collection: 'Favories' }])],
  // controllers: [UsersController],
  // providers: [UsersService, UsersResolver],

  controllers: [FavoriesController],
  providers: [FavoriesService]
})
export class FavoriesModule {}
