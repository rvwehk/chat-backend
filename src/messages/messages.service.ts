import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageInput } from './inputs/messages.input';

@Injectable()
export class MessagesService {
  constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) {}

  async findAll(): Promise<Message[]> {
    return await this.messageModel.find();
  }
  async findOne(id: string): Promise<Message> {
    return await this.messageModel.findOne({ _id: id });
  }

  async create(createMessageDto: MessageInput): Promise<Message> {
    const newMessage = new this.messageModel(createMessageDto);
    return await newMessage.save();
  }

  async delete(id: string): Promise<Message> {
    return await this.messageModel.findByIdAndRemove(id);
  }

  async update(id: string, message: Message): Promise<Message> {
    return await this.messageModel.findByIdAndUpdate(id, message, { new: true });
  }
}
