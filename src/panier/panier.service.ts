import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from '../cat/models/cat';
import { Panier } from './model/panier';

@Injectable()
export class PanierService {
  constructor(
    @InjectModel('Panier')
    private readonly panierModel: Model<Panier>,
  ) {}
  async creer(panier: Panier): Promise<Panier> {
    return await new this.panierModel({
      ...panier,
      createdAt: new Date(),
    }).save();
  }

  async supprimer(id): Promise<any> {
    return await this.panierModel.findByIdAndDelete(id).exec();
  }

  async miseAjour(id: string, update: any): Promise<any> {
    return await this.panierModel.findByIdAndUpdate(id, update).exec();
  }

  async trouverTous(): Promise<any[]> {
    return await this.panierModel.find().sort({ date: 'ascending' }).exec();
  }

  async trouverUn(id: string): Promise<any> {
    return await this.panierModel.findById(id).exec();
  }

  async trouveruser(id: string): Promise<any> {
    return await this.panierModel.findOne({ idu: id }).exec();
  }
  async pushproduit(idu: string, idP: string): Promise<any> {
    const produit = await this.panierModel.findOne({ idu: idu });
    produit.idP.push(idP);
    return this.panierModel.findByIdAndUpdate(produit._id, produit);
  }
  async delete(idu: string, idP: string): Promise<any> {
    const produit = await this.panierModel.findOne({ idu: idu });
    produit.idP.splice(produit.idP.indexOf(idP), 1);
    return this.panierModel.findByIdAndUpdate(produit._id, produit);
  }
}
