import { Model } from 'mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsService {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findAll(): Promise<Cat[]>;
}
