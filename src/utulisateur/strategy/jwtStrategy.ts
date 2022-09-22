import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { PassportStrategy } from '@nestjs/passport';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { UtulisateurService } from '../utulisateur.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private utulisateurservice: UtulisateurService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'dhiamelliti',
    });
  }

  async validate(payload: JwtPayload) {
    const utulisateur = await this.utulisateurservice.validateUserByJwt(
      payload,
    );

    if (!utulisateur) {
      throw new UnauthorizedException();
    }

    return utulisateur;
  }
}
