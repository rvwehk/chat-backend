import { Document } from 'mongoose';

export interface User extends Document {
  readonly email: string;
  readonly pseudo: string;
  readonly telephone: string;
  readonly password: string;
}
