"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.GalerieSchema = new mongoose.Schema({
    user: String,
    urlPicture: String,
    isDelete: Boolean
});
//# sourceMappingURL=galerie.schema.js.map