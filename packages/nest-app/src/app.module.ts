import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ChatModule } from "./chat/chat.module";
import { MessageModule } from "./message/message.module";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "test",
            autoLoadEntities: true,
            synchronize: true,
        }),
        UserModule,
        ChatModule,
        MessageModule,
    ],
})
export class AppModule {}
