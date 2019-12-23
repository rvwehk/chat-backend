import { Model } from 'mongoose';
import { Message } from './interfaces/message.interface';
import { MessageInput } from './inputs/messages.input';
export declare class MessagesService {
    private readonly messageModel;
    constructor(messageModel: Model<Message>);
    findAll(): Promise<Message[]>;
    findOne(id: string): Promise<Message>;
    create(createMessageDto: MessageInput): Promise<Message>;
    delete(id: string): Promise<Message>;
    update(id: string, message: Message): Promise<Message>;
}
