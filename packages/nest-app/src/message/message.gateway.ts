import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
} from "@nestjs/websockets";

@WebSocketGateway()
export class MessageGateway {
    @SubscribeMessage("message")
    handleMessage(@MessageBody() data: string) {
        console.info("*** received", data);
        return { event: "message", data: "Hello world!" };
    }
}
