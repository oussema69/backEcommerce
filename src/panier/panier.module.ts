import { Module } from '@nestjs/common';
import { PanierController } from './panier.controller';
import { PanierService } from './panier.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PanierSchemas } from './schema/panier.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Panier', schema: PanierSchemas }]),
  ],
  controllers: [PanierController],
  providers: [PanierService],
})
export class PanierModule {}
