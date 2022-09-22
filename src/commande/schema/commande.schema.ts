import { Schema } from 'mongoose';

export const CommandeSchemas = new Schema({
  idU: String,
  produit: [
    {
      id: String,
      prix: Number,
      quantite: Number,
    },
  ],
  prix: Number,
  payer: Boolean,

  date: { type: Date, default: Date.now() },
});
