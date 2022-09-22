import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UtulisateurModule } from './utulisateur/utulisateur.module';
import { ContactModule } from './contact/contact.module';
import { ArticleModule } from './article/article.module';
import { FileController } from './file/file.controller';
import { CatModule } from './cat/cat.module';
import { CommandeModule } from './commande/commande.module';
import { PanierModule } from './panier/panier.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/commerce'),
    UtulisateurModule,
    ContactModule,
    ArticleModule,
    CatModule,
    CommandeModule,
    PanierModule,
  ],
  controllers: [AppController, FileController],
  providers: [AppService],
})
export class AppModule {}
