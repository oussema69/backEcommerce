import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Contact } from './model/contact';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel('Contact')
    private readonly contact: Model<Contact>,
  ) {}

  async creer(contact: Contact): Promise<Contact> {
    return await new this.contact({
      ...contact,
      createdAt: new Date(),
    }).save();
  }
  async trouverTous(): Promise<Contact[]> {
    return await this.contact.find().sort({ date: 'ascending' }).exec();
  }
  async supprimer(id): Promise<any> {
    return await this.contact.findByIdAndDelete(id).exec();
  }
}
