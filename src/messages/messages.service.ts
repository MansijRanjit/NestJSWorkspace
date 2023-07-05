import { MessageRepository } from './message.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  constructor(public messageRepo: MessageRepository) {}
  //OR we can do this
  /* messageRepo: MessageRepository;

  constructor(repo: MessageRepository) {
    this.messageRepo = repo;
  }
*/
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
