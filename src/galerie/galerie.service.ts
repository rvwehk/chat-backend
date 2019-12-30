import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Galerie } from './interface/galerie.interface';
import { CreateGalerieDto } from './dto/create-galerie.dto';

@Injectable()
export class GalerieService {
    constructor(
        @InjectModel('Galerie')
        private readonly galerieModel: Model<Galerie>
    ) { }

    async findAlls(user: string): Promise<Galerie[]> {
        return await this.galerieModel.find({ user: user });
    }

    async create(galerie: CreateGalerieDto): Promise<Galerie> {
        const newGalerie = new this.galerieModel(galerie);
        return await newGalerie.save();
    }

    async delete(pictureId: string): Promise<Galerie> {
        const find =await this.galerieModel.findOne({ _id: pictureId });
        if (find) {
            find.isDelete = true;
            return await find.save()
        }
    }
}
