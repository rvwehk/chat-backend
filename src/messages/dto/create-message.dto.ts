import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class CreateMessageDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly content: string;
  // @Field()
  // readonly user: string;
  // @Field()
  // readonly date: string;
  // @Field()
  // readonly read: string;
}
