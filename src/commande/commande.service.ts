import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from '../cat/models/cat';
import { Commande } from './model/commande';

@Injectable()
export class CommandeService {
  constructor(
    @InjectModel('Commande')
    private readonly commandeModel: Model<Commande>,
  ) {}
  async creer(com: Commande): Promise<Commande> {
    return await new this.commandeModel({
      ...com,
      createdAt: new Date(),
    }).save();
  }
  async supprimer(id): Promise<any> {
    return await this.commandeModel.findByIdAndDelete(id).exec();
  }

  async miseAjour(id: string, update: any): Promise<any> {
    return await this.commandeModel.findByIdAndUpdate(id, update).exec();
  }

  async trouverTous(): Promise<any[]> {
    return await this.commandeModel.find().sort({ date: 'ascending' }).exec();
  }

  async trouverUn(id: string): Promise<any> {
    return await this.commandeModel.findById(id).exec();
  }
  async trouverparuser(id: string): Promise<any> {
    return await this.commandeModel.find({ idU: id }).exec();
  }
}
