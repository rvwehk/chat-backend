import { Favories } from './interface/favories.interface';
import { Model } from 'mongoose';
import { CreateFavoriesDto } from './dto/create-favories.dto';
export declare class FavoriesService {
    private favoriesModel;
    constructor(favoriesModel: Model<Favories>);
    findFavories(user: string): Promise<Favories>;
    createFavories(favo: CreateFavoriesDto): Promise<Favories>;
}
