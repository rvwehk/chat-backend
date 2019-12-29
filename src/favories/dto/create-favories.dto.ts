import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class CreateFavoriesDto {
    @Field()
    readonly user: String;
    @Field()
    readonly tabUser: string[];
}