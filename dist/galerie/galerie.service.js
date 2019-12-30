"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let GalerieService = class GalerieService {
    constructor(galerieModel) {
        this.galerieModel = galerieModel;
    }
    async findAlls(user) {
        return await this.galerieModel.find({ user: user });
    }
    async create(galerie) {
        const newGalerie = new this.galerieModel(galerie);
        return await newGalerie.save();
    }
    async delete(pictureId) {
        const find = await this.galerieModel.findOne({ _id: pictureId });
        if (find) {
            find.isDelete = true;
            return await find.save();
        }
    }
};
GalerieService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Galerie')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GalerieService);
exports.GalerieService = GalerieService;
//# sourceMappingURL=galerie.service.js.map