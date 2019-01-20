import { Injectable } from "@angular/core";
import { LoginMessage, MessageService, ResponseMessageInfo } from "../Messages/Messages.module";

@Injectable()
export class LoginService {
    constructor(private msgService: MessageService) {

    }
    async login(userName: string, password: string, code?: string): Promise<ResponseMessageInfo> {
        let msg = new LoginMessage();
        msg.userName = userName;
        msg.password = password;
        msg.verificationCode = code;
        let result = await this.msgService.send(msg);
        return Promise.resolve(result);
    }
}