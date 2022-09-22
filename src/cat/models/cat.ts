import { Document } from 'mongoose';

export class Cat extends Document {
    nom: string;
    description: string;
    img: string;
    date: Date;

}
