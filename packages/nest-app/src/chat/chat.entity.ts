import { Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";

@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => User, (user) => user.id)
    participants: User[];

    @OneToMany(() => Message, (message) => message.id)
    messages: Message[];
}
