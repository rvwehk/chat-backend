import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageInput } from './inputs/messages.input';

@Resolver()
export class MessagesResolver {
  constructor(
    private readonly messagesService: MessagesService,
  ) {}

  @Query(() => [CreateMessageDto])
  async findAllMessages() {
    return this.messagesService.findAll();
  }

  @Mutation(() => CreateMessageDto)
  async createMessage(@Args('input') input: MessageInput) {
    return this.messagesService.create(input);
  }

}
