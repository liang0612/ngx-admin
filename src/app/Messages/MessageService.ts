import { Injectable } from "@angular/core";
import { BaseMessage } from "./Messages.module";
import { ResponseMessageInfo } from "./ResponseMessageInfo";
import { HttpClient } from "@angular/common/http";

/**
 * 消息服务
 */
@Injectable()
export class MessageService{

    constructor(private http:HttpClient){

    }
    async send(msg:BaseMessage):Promise<ResponseMessageInfo>{
        if(msg&&msg.address){

        }
        let result=new ResponseMessageInfo();
        result.stateCode=-1;
        result.stateDesc="不支持的服务.";
        return Promise.resolve(result);
    }
}