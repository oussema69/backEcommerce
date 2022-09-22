import { IsNotEmpty, IsEmail } from 'class-validator';
export class TokenDto {
    @IsNotEmpty()
    id?: string;
    @IsNotEmpty()
    nom: string;
    @IsNotEmpty()
    prenom: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    motPasse: string;
    role: number;
    img:string;
    tel:number;
    adresse:string;



}
