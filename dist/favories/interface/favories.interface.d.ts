import { Document } from "mongoose";
export interface Favories extends Document {
    readonly user: string;
    tabUser: string[];
}
