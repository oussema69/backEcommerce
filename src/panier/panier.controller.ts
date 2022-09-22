import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatService } from '../cat/cat.service';
import { Cat } from '../cat/models/cat';
import { PanierService } from './panier.service';
import { Panier } from './model/panier';

@Controller('panier')
export class PanierController {
  constructor(private readonly panierS: PanierService) {}

  @Post()
  async creer(@Body() res: Panier) {
    const generatedId = await this.panierS.creer(res);

    return generatedId;
  }
  @Get()
  async trouver(): Promise<Panier[]> {
    return await this.panierS.trouverTous();
  }
  @Delete(':id')
  async supprimer(@Param('id') id: string) {
    return await this.panierS.supprimer(id);
  }
  @Put('/:idu/:idp')
  async pushproduit(
    @Param('idu') idu: string,
    @Param('idp') idp: string,
  ): Promise<any> {
    return this.panierS.pushproduit(idu, idp);
  }
  @Put('/del/:idu/:idp')
  async deleteproduit(
    @Param('idu') idu: string,
    @Param('idp') idp: string,
  ): Promise<any> {
    return this.panierS.delete(idu, idp);
  }
  @Put('/:id')
  async updateForm(@Param('id') id: string, @Body() updateCat): Promise<any> {
    return await this.panierS.miseAjour(id, updateCat);
  }
  @Get('/one/:id')
  async find(@Param('id') id: string) {
    return await this.panierS.trouverUn(id);
  }
  @Get('/user/:id')
  async finduser(@Param('id') id: string) {
    return await this.panierS.trouveruser(id);
  }
}
