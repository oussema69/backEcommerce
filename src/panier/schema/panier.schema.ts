import { Schema } from 'mongoose';

export const PanierSchemas = new Schema({
  idP: [],
  idu: String,
  quantite: Number,
  prix: Number,

  date: { type: Date, default: Date.now() },
});
