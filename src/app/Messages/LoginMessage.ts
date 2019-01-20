import { BaseMessage } from "./BaseMessage";

export class LoginMessage extends BaseMessage{
    /**
     * 用户名
     */
    userName:string;
    /**
     * 密码
     */
    password:string;
    /**
     * 验证码
     */
    verificationCode?:string;

    address="api/login";
}