import { Document } from 'mongoose';

export class Panier extends Document {
  id?: string;
  idP: string[];
  idu: string;
  quantite: number;
  prix: number;
  date: Date;
}
