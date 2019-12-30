import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { GalerieService } from './galerie.service';
import { Galerie } from './interface/galerie.interface';
import { CreateGalerieDto } from './dto/create-galerie.dto';

@Controller('galerie')
export class GalerieController {
    constructor(
        private galerieServ: GalerieService
    ) {}

    @Get(':id') 
    async findAlls(@Param('id') user) : Promise<Galerie[]>{
        return await this.galerieServ.findAlls(user);
    }

    @Post()
    async created(@Body() galerie: CreateGalerieDto): Promise<Galerie> {
        return await this.galerieServ.create(galerie);
    }

    @Put(':id')
    async delete(@Param('id') pictureId: string) {
        return await this.galerieServ.delete(pictureId);
    }
}
