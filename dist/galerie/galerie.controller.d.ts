import { GalerieService } from './galerie.service';
import { Galerie } from './interface/galerie.interface';
import { CreateGalerieDto } from './dto/create-galerie.dto';
export declare class GalerieController {
    private galerieServ;
    constructor(galerieServ: GalerieService);
    findAlls(user: any): Promise<Galerie[]>;
    created(galerie: CreateGalerieDto): Promise<Galerie>;
    delete(pictureId: string): Promise<Galerie>;
}
