import { Document } from 'mongoose';
export interface Message extends Document {
    readonly content: string;
    readonly user: string;
    readonly date: string;
    readonly read: string;
}
