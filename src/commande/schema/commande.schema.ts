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
  tel: Number,
  payer: Boolean,
  adresse: String,
  nom: String,

  date: { type: Date, default: Date.now() },
});
