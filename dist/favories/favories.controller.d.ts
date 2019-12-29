import { FavoriesService } from './favories.service';
import { Favories } from './interface/favories.interface';
export declare class FavoriesController {
    private favories;
    constructor(favories: FavoriesService);
    getFavories(id: string): Promise<Favories>;
}
