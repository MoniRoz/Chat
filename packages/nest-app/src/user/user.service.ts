import { Injectable } from "@nestjs/common";

import { UserGateway } from "./user.gateway";

@Injectable()
export class UserService {
    constructor(private userGateway: UserGateway) {}

    handle() {
        this.userGateway.sendActivityUpdate();
    }
}
