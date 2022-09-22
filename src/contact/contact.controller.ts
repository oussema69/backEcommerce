import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './model/contact';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async creer(@Body() res: Contact) {
    const generatedId = await this.contactService.creer(res);

    return generatedId;
  }
  @Get()
  async trouver(): Promise<Contact[]> {
    return await this.contactService.trouverTous();
  }
  @Delete(':id')
  async supprimer(@Param('id') id: string) {
    return await this.contactService.supprimer(id);
  }
}
