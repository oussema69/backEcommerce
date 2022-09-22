import { Document } from 'mongoose';

export class Utulisateur extends Document {
  id?: string;
  nom: string;
  prenom: string;
  email: string;
  motPasse: string;
  role: number;
  img: string;
  tel:number;
  adresse:string;

}
