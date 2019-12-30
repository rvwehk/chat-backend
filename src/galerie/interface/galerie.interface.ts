import { Document } from "mongoose";

export interface Galerie extends Document {
    readonly user;
    readonly urlPicture;
     isDelete;
}