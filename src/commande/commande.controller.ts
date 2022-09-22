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
import { CommandeModule } from './commande.module';
import { CommandeService } from './commande.service';
import { Commande } from './model/commande';

@Controller('commande')
export class CommandeController {
  constructor(private readonly commandeS: CommandeService) {}

  @Post()
  async creer(@Body() res: Commande) {
    const generatedId = await this.commandeS.creer(res);

    return generatedId;
  }
  @Get()
  async trouver(): Promise<Commande[]> {
    return await this.commandeS.trouverTous();
  }
  @Delete(':id')
  async supprimer(@Param('id') id: string) {
    return await this.commandeS.supprimer(id);
  }
  @Put('/:id')
  async updateForm(@Param('id') id: string, @Body() updateC): Promise<any> {
    return await this.commandeS.miseAjour(id, updateC);
  }
  @Get('/one/:id')
  async find(@Param('id') id: string) {
    return await this.commandeS.trouverUn(id);
  }
  @Get('/user/:id')
  async finduser(@Param('id') id: string) {
    return await this.commandeS.trouverparuser(id);
  }
}
