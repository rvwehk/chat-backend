import { MessagesService } from './messages.service';
import { MessageInput } from './inputs/messages.input';
export declare class MessagesResolver {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    findAllMessages(): Promise<import("./interfaces/message.interface").Message[]>;
    createMessage(input: MessageInput): Promise<import("./interfaces/message.interface").Message>;
}
