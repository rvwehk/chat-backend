import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { FavoriesService } from './favories.service';
import { Favories } from './interface/favories.interface';
import { CreateFavoriesDto } from './dto/create-favories.dto';
import { isThisTypeNode } from 'typescript';

@Controller('favories')
export class FavoriesController {
    constructor(
        private favories: FavoriesService,
    ){}

    @Get(':id')
    async getFavories(@Param('id') id: string): Promise<Favories> {
        return await this.favories.findFavories(id);
    }

    // @Post()
    // async createFavories(@Body() favo: CreateFavoriesDto): Promise<Favories> {
    //     return await this.favories.createFavories(favo);
    // }

    // @Put()
    // async removeFavories(@Body() favo : CreateFavoriesDto): Promise<Favories> {
    //     return await this.favories.removeFavories(favo);
    // }
}
