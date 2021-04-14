import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Chat } from "src/chat/chat.entity";
import { User } from "src/user/user.entity";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("date")
    date: Date;

    @Column("text")
    content: string;

    @ManyToOne(() => Chat, (chat) => chat.id)
    chatId: number;

    @ManyToOne(() => User, (user) => user.id)
    sender: string;
}
