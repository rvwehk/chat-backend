import { Model } from 'mongoose';
import { Galerie } from './interface/galerie.interface';
import { CreateGalerieDto } from './dto/create-galerie.dto';
export declare class GalerieService {
    private readonly galerieModel;
    constructor(galerieModel: Model<Galerie>);
    findAlls(user: string): Promise<Galerie[]>;
    create(galerie: CreateGalerieDto): Promise<Galerie>;
    delete(pictureId: string): Promise<Galerie>;
}
