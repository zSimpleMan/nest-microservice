import { Injectable } from "@nestjs/common";
import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3060, {
  cors: {
    origin: true,
    methods: ['GET', 'POST'],
    credentials:true
  },
  allowEIO3: true,
})
export class SocketGateWay {
  @WebSocketServer() server: Server

  constructor() {
    // if (!this.server) {
    //   this.server = new Server()
    // }
  }

  async sendMessage (data) {
    this.server.emit('home', data)
    return 'success'
  }

  async handleConnection (client: Socket) {
    console.log('connected!')
  }
}