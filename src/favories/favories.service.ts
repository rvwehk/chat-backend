import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Favories } from './interface/favories.interface';
import { Model } from 'mongoose';
import { CreateFavoriesDto } from './dto/create-favories.dto';

@Injectable()
export class FavoriesService {
    constructor(
        @InjectModel('Favories')
        private favoriesModel: Model<Favories>) { }

    async findFavories(user: string): Promise<Favories> {
        const fav = await this.favoriesModel.findOne({ _id: user });
        if (fav) {
            return fav;
        } else {
            // throw new NotFoundException('Not found');
        }
    }

    async createFavories(favo: CreateFavoriesDto): Promise<Favories> {
        // const exist = await this.favoriesModel.findOne({ _id: favo.user });
        // return await this.favoriesModel.findOne({ _id: favo.user });
        // if (exist) {
    //         exist.tabUser.concat(favo.tabUser)
    //         // try {
    //             return await exist.save()
            // } catch (error) {
                // throw new BadRequestException(error);
            // }
        // } else {

            const newFavories = new this.favoriesModel(favo);
            // try {
                return await newFavories.save();
            // } catch (error) {
                // throw new BadRequestException();
            // }
        // }
        // return exist
    }

    // async removeFavories(favo: CreateFavoriesDto): Promise<Favories> {
    //     const exist = await this.favoriesModel.findOne({ _id: favo.user });
    //     if (exist) {
    //         const newfavo = exist.tabUser.filter(x => !favo.tabUser.includes(x) )
    //         exist.tabUser = newfavo;
    //         // try {
    //             return await exist.save()
    //         // } catch (error) {
    //             // throw new BadRequestException('Bad Request');
    //         // }
    //     }
    // }
}
