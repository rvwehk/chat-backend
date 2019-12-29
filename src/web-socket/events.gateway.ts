import { string } from "yargs";
import { SubscribeMessage, MessageBody } from "@nestjs/websockets";
import { ConnectedSocket } from "@nestjs/websockets";

// @SubscribeMessage('events')
// handleEvent(@MessageBody() data: string): string {
//   return data;
// }

// @SubscribeMessage('events')
// handleEvent(client: Socket, data: string): string {
//   return data;
// }

// @SubscribeMessage('events')
// handleEvent(
//   @MessageBody() data: string,
//   @ConnectedSocket() client: Socket,
// ): string {
//   return data;
// }