import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './models/cat';
import {Utulisateur} from "../utulisateur/model/utulisateur";
@Injectable()
export class CatService {
  constructor(
    @InjectModel('Cat')
    private readonly catModel: Model<Cat>,
  ) {}
  async creer(cat: Cat): Promise<Cat> {
    if (!(await this.trouverUtuParNom(cat.nom))) {
      return await new this.catModel({
        ...cat,
        createdAt: new Date(),
      }).save();
    } else {
      throw new UnprocessableEntityException('user already exists.');
    }
  }
  async trouverUtuParNom(nom): Promise<Cat> {
    return this.catModel.findOne({ nom }).exec();
  }
  async supprimer(id): Promise<any> {
    return await this.catModel.findByIdAndDelete(id).exec();
  }

  async miseAjour(id: string, update: any): Promise<any> {
    return await this.catModel.findByIdAndUpdate(id, update).exec();
  }

  async trouverTous(): Promise<any[]> {
    return await this.catModel.find().sort({ date: 'ascending' }).exec();
  }

  async trouverUn(id: string): Promise<any> {
    return await this.catModel.findById(id).exec();
  }
}
