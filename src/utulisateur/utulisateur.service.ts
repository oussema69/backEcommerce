import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Utulisateur } from './model/utulisateur';
import { JwtService } from '@nestjs/jwt';
import { TokenDto } from './dto/tokenDto';
import { JwtPayload } from './interface/jwt-payload.interface';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UtulisateurService {
  constructor(
    @InjectModel('Utulisateur')
    private readonly utuModel: Model<Utulisateur>,
    private jwtService: JwtService,
  ) {}

  async registrer(utulisateur: Utulisateur): Promise<Utulisateur> {
    if (!(await this.trouverUtuParEmail(utulisateur.email))) {
      return await new this.utuModel({
        ...utulisateur,
        createdAt: new Date(),
      }).save();
    } else {
      throw new UnprocessableEntityException('user already exists.');
    }
  }
  async trouverUtuParEmail(email): Promise<Utulisateur> {
    return this.utuModel.findOne({ email }).exec();
  }
  async connecter(tokenDto: TokenDto) {
    const user = await this.utuModel.findOne({
      email: tokenDto.email,
      motPasse: tokenDto.motPasse,
    });

    if (!user) {
      return null;
    } else {
      if (user) {
        const token = jwt.sign({ data: user }, 'dhiamelliti');
        return token;
      } else {
        return null;
      }
    }
  }

  createJwtPayload(utulisateur) {
    const data: JwtPayload = {
      email: utulisateur.email,
      motPasse: utulisateur.motPasse,
      nom: utulisateur.nom,
      prenom: utulisateur.prenom,
      role: utulisateur.role,
      img: utulisateur.img,
      _id: utulisateur._id,
      tel: utulisateur.tel,
      adresse: utulisateur.adresse,
    };

    const jwt = this.jwtService.sign(data);

    return jwt;
  }
  async validateUserByJwt(payload: JwtPayload) {
    const utulisateur = await this.utuModel.findOne({
      email: payload.email,
      motPasse: payload.motPasse,
    });

    if (utulisateur) {
      return this.createJwtPayload(utulisateur);
    } else {
      throw new UnauthorizedException();
    }
  }
  async supprimer(id): Promise<any> {
    return await this.utuModel.findByIdAndDelete(id).exec();
  }

  async miseAjour(id: string, update: any): Promise<any> {
    return await this.utuModel.findByIdAndUpdate(id, update).exec();
  }

  async trouverTous(): Promise<any[]> {
    return await this.utuModel.find().sort({ date: 'ascending' }).exec();
  }

  async trouverUn(id: string): Promise<any> {
    return await this.utuModel.findById(id).exec();
  }

  async compter(): Promise<number> {
    return await this.utuModel.find().count().exec();
  }
}
