import * as mongoose from "mongoose";

export const FavoriesSchema = new mongoose.Schema({
    user: String,
    tabUser: [],
})