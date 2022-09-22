import { Module } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CommandeController } from './commande.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {CatSchemas} from "../cat/schema/cat.schemas";
import {CommandeSchemas} from "./schema/commande.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Commande', schema: CommandeSchemas }]),
  ],
  providers: [CommandeService],
  controllers: [CommandeController]
})
export class CommandeModule {}
