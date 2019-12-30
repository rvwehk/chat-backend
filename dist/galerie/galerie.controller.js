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
const galerie_service_1 = require("./galerie.service");
const create_galerie_dto_1 = require("./dto/create-galerie.dto");
let GalerieController = class GalerieController {
    constructor(galerieServ) {
        this.galerieServ = galerieServ;
    }
    async findAlls(user) {
        return await this.galerieServ.findAlls(user);
    }
    async created(galerie) {
        return await this.galerieServ.create(galerie);
    }
    async delete(pictureId) {
        return await this.galerieServ.delete(pictureId);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GalerieController.prototype, "findAlls", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_galerie_dto_1.CreateGalerieDto]),
    __metadata("design:returntype", Promise)
], GalerieController.prototype, "created", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GalerieController.prototype, "delete", null);
GalerieController = __decorate([
    common_1.Controller('galerie'),
    __metadata("design:paramtypes", [galerie_service_1.GalerieService])
], GalerieController);
exports.GalerieController = GalerieController;
//# sourceMappingURL=galerie.controller.js.map