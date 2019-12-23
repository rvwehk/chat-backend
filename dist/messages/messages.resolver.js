"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const messages_service_1 = require("./messages.service");
const create_message_dto_1 = require("./dto/create-message.dto");
const messages_input_1 = require("./inputs/messages.input");
let MessagesResolver = class MessagesResolver {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async findAllMessages() {
        return this.messagesService.findAll();
    }
    async createMessage(input) {
        return this.messagesService.create(input);
    }
};
__decorate([
    graphql_1.Query(() => [create_message_dto_1.CreateMessageDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessagesResolver.prototype, "findAllMessages", null);
__decorate([
    graphql_1.Mutation(() => create_message_dto_1.CreateMessageDto),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [messages_input_1.MessageInput]),
    __metadata("design:returntype", Promise)
], MessagesResolver.prototype, "createMessage", null);
MessagesResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesResolver);
exports.MessagesResolver = MessagesResolver;
//# sourceMappingURL=messages.resolver.js.map