import { Schema } from 'mongoose';

export const UtulisateurSchemas = new Schema({
  nom: String,
  prenom: String,
  email: String,
  motPasse: String,
  role: { type: Number, default: 1 },
  img: String,
  tel:Number,
  adresse:String,

});
