import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import { UtulisateurService } from './utulisateur.service';
import { Utulisateur } from './model/utulisateur';
import { TokenDto } from './dto/tokenDto';

@Controller('utulisateur')
export class UtulisateurController {
  constructor(private readonly utulisateurService: UtulisateurService) {}
  @Post()
  async create(@Body() utulisateur: Utulisateur) {
    const generatedId = await this.utulisateurService.registrer(utulisateur);

    return { id: generatedId };
  }
  @Post('/login')
  async sendToken(@Res() res, @Body() tokenDto: TokenDto) {
    const utu = await this.utulisateurService.connecter(tokenDto);
    if (utu === null) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'email or password incorrecte',
      });
    }
    return res.status(HttpStatus.OK).json({
      token: utu,
    });
  }
  @Get()
  async trouvertous(): Promise<Utulisateur[]> {
    return await this.utulisateurService.trouverTous();
  }
  @Delete(':id')
  async deleteApp(@Param('id') id: string) {
    return await this.utulisateurService.supprimer(id);
  }
  @Put('/:id')
  async updateForm(@Param('id') id: string, @Body() updateCat): Promise<any> {
    return await this.utulisateurService.miseAjour(id, updateCat);
  }
  @Get('/one/:id')
  async find(@Param('id') id: string) {
    return await this.utulisateurService.trouverUn(id);
  }
  @Get('/countU')
  async count(): Promise<number> {
    return await this.utulisateurService.compter();
  }
}
