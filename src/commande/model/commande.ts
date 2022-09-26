import { Document } from 'mongoose';

export class Commande extends Document {
  idU!: string;
  produit!: Produit[];
  date!: string;
  prix!: number;
  payer!: boolean;
  adresse!: string;
  tel!: number;
  nom!: string;
}

export class Produit {
  id!: string;
  prix!: number;
  quantite!: number;
}
