import { Schema } from 'mongoose';

export const ArticleSchemas = new Schema({
  nom: String,
  description: String,
  img: String,
  prix: Number,
  categ: String,
  quantite: Number,
  date: { type: Date, default: Date.now() },
});
