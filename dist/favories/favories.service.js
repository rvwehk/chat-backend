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
let FavoriesService = class FavoriesService {
    constructor(favoriesModel) {
        this.favoriesModel = favoriesModel;
    }
    async findFavories(user) {
        const fav = await this.favoriesModel.findOne({ _id: user });
        if (fav) {
            return fav;
        }
        else {
        }
    }
    async createFavories(favo) {
        const newFavories = new this.favoriesModel(favo);
        return await newFavories.save();
    }
};
FavoriesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Favories')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FavoriesService);
exports.FavoriesService = FavoriesService;
//# sourceMappingURL=favories.service.js.map