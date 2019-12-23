import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CreateCatDto {
  @Field()
  readonly email: string;
}
