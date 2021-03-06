import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    CatsModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/social_network'),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [ AppService],
})
export class AppModule {}
