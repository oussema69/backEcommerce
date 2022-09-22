import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../contact/model/contact';
import { CatService } from './cat.service';
import { Cat } from './models/cat';

@Controller('cat')
export class CatController {
  constructor(private readonly catservice: CatService) {}

  @Post()
  async creer(@Body() res: Cat) {
    const generatedId = await this.catservice.creer(res);

    return generatedId;
  }
  @Get()
  async trouver(): Promise<Cat[]> {
    return await this.catservice.trouverTous();
  }
  @Delete(':id')
  async supprimer(@Param('id') id: string) {
    return await this.catservice.supprimer(id);
  }
  @Put('/:id')
  async updateForm(@Param('id') id: string, @Body() updateCat): Promise<any> {
    return await this.catservice.miseAjour(id, updateCat);
  }
  @Get('/one/:id')
  async find(@Param('id') id: string) {
    return await this.catservice.trouverUn(id);
  }
}
