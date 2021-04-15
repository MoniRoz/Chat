import { WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class UserGateway {
    sendActivityUpdate(): string {
        return "Hello world!";
    }
}
