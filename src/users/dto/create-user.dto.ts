import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CreateUserDto {
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
  @Field()
  readonly pseudo: string;
  @Field()
  readonly telephone: string;
}
