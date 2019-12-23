import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  content: String,
  // user: String,
  // date: String,
  // read: String,
});
