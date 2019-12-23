import { InputType, Field } from 'type-graphql';

@InputType()
export class MessageInput {
  @Field()
  readonly content: string;
}
