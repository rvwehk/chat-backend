import * as mongoose from "mongoose";

export const GalerieSchema = new mongoose.Schema({
    user: String,
    urlPicture: String,
    isDelete: Boolean
})