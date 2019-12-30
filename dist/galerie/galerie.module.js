"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const galerie_controller_1 = require("./galerie.controller");
const galerie_service_1 = require("./galerie.service");
const mongoose_1 = require("@nestjs/mongoose");
const galerie_schema_1 = require("./schema/galerie.schema");
let GalerieModule = class GalerieModule {
};
GalerieModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Galerie', schema: galerie_schema_1.GalerieSchema, collection: 'Galerie' }])],
        controllers: [galerie_controller_1.GalerieController],
        providers: [galerie_service_1.GalerieService]
    })
], GalerieModule);
exports.GalerieModule = GalerieModule;
//# sourceMappingURL=galerie.module.js.map