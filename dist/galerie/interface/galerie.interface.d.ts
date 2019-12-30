import { Document } from "mongoose";
export interface Galerie extends Document {
    readonly user: any;
    readonly urlPicture: any;
    isDelete: any;
}
