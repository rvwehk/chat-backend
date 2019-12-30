import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class CreateGalerieDto {
    @Field()
    readonly user: string;
    @Field()
    readonly urlPicture: string;
    @Field()
    readonly isDelete: boolean;
}