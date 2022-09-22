import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ArticleSchemas} from "../article/schema/article.schemas";
import {CatSchemas} from "./schema/cat.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchemas }]),
  ],
  controllers: [CatController],
  providers: [CatService]
})
export class CatModule {}
