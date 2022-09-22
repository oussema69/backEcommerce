import { Schema } from 'mongoose';

export const CatSchemas = new Schema({
  nom: String,
  description: String,
  img: String,
  date:{ type: Date, default: Date.now() }
});
