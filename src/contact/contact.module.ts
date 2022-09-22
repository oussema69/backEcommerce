import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchemas } from './schema/contact.shcema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchemas }]),
  ],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
