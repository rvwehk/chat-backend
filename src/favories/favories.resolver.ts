import { Resolver, Query } from "type-graphql";
import { FavoriesService } from "./favories.service";
import { CreateFavoriesDto } from "./dto/create-favories.dto";

@Resolver()
export class FavoriesResolver {
    constructor(
        private readonly favoriesServ: FavoriesService,
    ) {}
    @Query(() => String)
    async hola() {
        return 'hello my favories';
    }

    // @Query(() => [CreateFavoriesDto])
    // async favories() {
    //     return this.favoriesServ.findFavories(id);
    // }

}