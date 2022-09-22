import { Module } from '@nestjs/common';
import { UtulisateurController } from './utulisateur.controller';
import { UtulisateurService } from './utulisateur.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './strategy/key';
import { UtulisateurSchemas } from './schema/utulisateur.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Utulisateur', schema: UtulisateurSchemas },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secretOrPrivateKey: jwtConstants.secret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [UtulisateurController],
  providers: [UtulisateurService],
})
export class UtulisateurModule {}
