import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ContactSchemas} from "../contact/schema/contact.shcema";
import {ArticleSchemas} from "./schema/article.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchemas }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
