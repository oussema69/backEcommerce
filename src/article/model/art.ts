import { Document } from 'mongoose';

export class Article extends Document {
  nom: string;
  description: string;
  img: string;
  prix: number;
  categ: string;
  quantite!: number;
  date: Date;
}
