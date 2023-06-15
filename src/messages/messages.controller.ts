import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('list message');
  }

  @Post()
  createMessages(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
