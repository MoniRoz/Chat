import {
    Column,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Chat } from "src/chat/chat.entity";
import { Message } from "src/message/message.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column("text")
    surname: string;

    @Column("boolean")
    @Index("activity-idx")
    isActive: boolean;

    @Column("date")
    lastActive: Date;

    @ManyToMany(() => Chat, (chat) => chat.id)
    @JoinTable()
    chats: Chat[];

    @OneToMany(() => Message, (message) => message.sender)
    messages: Message[];
}
