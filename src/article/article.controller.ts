import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './model/art';

@Controller('article')
export class ArticleController {
  constructor(private readonly artService: ArticleService) {}

  @Post()
  async creer(@Body() res: Article) {
    const generatedId = await this.artService.creer(res);

    return generatedId;
  }
  @Get()
  async trouver(): Promise<Article[]> {
    return await this.artService.trouverTous();
  }
  @Delete(':id')
  async supprimer(@Param('id') id: string) {
    return await this.artService.supprimer(id);
  }
  @Put('/:id')
  async updateForm(@Param('id') id: string, @Body() updateArt): Promise<any> {
    return await this.artService.miseAjour(id, updateArt);
  }
  @Get('/one/:id')
  async find(@Param('id') id: string) {
    return await this.artService.trouverUn(id);
  }
  @Get('/oneCat/:cat')
  async findCat(@Param('cat') cat: string) {
    return await this.artService.trouverUnCat(cat);
  }
}
