import { Document } from 'mongoose';

export class Contact extends Document {
  id?: string;
  nom: string;
  email: string;
  sujet: string;
  message: string;
  date: Date;

}
