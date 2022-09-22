import { Schema } from 'mongoose';

export const ContactSchemas = new Schema({
  nom: String,
  email: String,
  sujet: String,
  message: String,
  date: { type: Date, default: Date.now() },
});
