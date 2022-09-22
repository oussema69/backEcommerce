import { Document } from 'mongoose';

export interface Utulisateur extends Document {
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
