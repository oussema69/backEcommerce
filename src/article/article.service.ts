import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './model/art';
import { Cat } from '../cat/models/cat';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article')
    private readonly articleModel: Model<Article>,
  ) {}

  async creer(art: Cat): Promise<Article> {
    if (!(await this.trouverUtuParNom(art.nom))) {
      return await new this.articleModel({
        ...art,
        createdAt: new Date(),
      }).save();
    } else {
      throw new UnprocessableEntityException('user already exists.');
    }
  }
  async trouverUtuParNom(nom): Promise<Cat> {
    return this.articleModel.findOne({ nom }).exec();
  }
  async supprimer(id): Promise<any> {
    return await this.articleModel.findByIdAndDelete(id).exec();
  }

  async miseAjour(id: string, update: any): Promise<any> {
    return await this.articleModel.findByIdAndUpdate(id, update).exec();
  }

  async trouverTous(): Promise<any[]> {
    return await this.articleModel.find().sort({ date: 'ascending' }).exec();
  }

  async trouverUn(id: string): Promise<any> {
    return await this.articleModel.findById(id).exec();
  }
  async trouverUnCat(cat: string): Promise<any> {
    return await this.articleModel.find({ categ: cat }).exec();
  }
}
