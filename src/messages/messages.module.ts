import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessageSchema } from './schemas/message.schema';
import { MessagesResolver } from './messages.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema, collection: 'Message' }])],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesResolver],
})
export class MessagesModule {}
