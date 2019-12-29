import { FavoriesService } from "./favories.service";
export declare class FavoriesResolver {
    private readonly favoriesServ;
    constructor(favoriesServ: FavoriesService);
    hola(): Promise<string>;
}
